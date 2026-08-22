const { addChatId } = require('../lib/telegram-chats');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  // Optional but recommended: Telegram echoes this header back on every
  // webhook call when secret_token was set via setWebhook, so randos on the
  // internet can't POST fake /start updates into our recipient list.
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (secret && req.headers['x-telegram-bot-api-secret-token'] !== secret) {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
    return;
  }

  let update = req.body;
  if (typeof update === 'string') {
    try { update = JSON.parse(update); } catch (e) { update = {}; }
  }
  update = update || {};

  try {
    const message = update.message;
    const chatId = message && message.chat && message.chat.id;
    const text = typeof (message && message.text) === 'string' ? message.text : '';

    // Covers "/start", "/start <payload>" (deep links) and "/start@BotName".
    if (chatId && text.startsWith('/start')) {
      await addChatId(chatId);
    }
  } catch (err) {
    console.error('telegram-webhook: failed to process update', err);
  }

  // Telegram just needs a fast 200 — it retries on anything else.
  res.status(200).json({ ok: true });
};
