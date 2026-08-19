module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const clip = (value, max) => String(value).trim().slice(0, max);
  const name = typeof body.name === 'string' ? clip(body.name, 100) : '';
  const phone = typeof body.phone === 'string' ? clip(body.phone, 40) : '';
  const service = typeof body.service === 'string' ? clip(body.service, 100) : '';
  const page = typeof body.page === 'string' && body.page.trim() ? clip(body.page, 100) : 'Не вказано';

  if (!name || !phone || !service) {
    res.status(400).json({ ok: false, error: "Вкажіть ім'я, телефон і послугу" });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('submit-lead: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    res.status(500).json({ ok: false, error: 'Сервіс тимчасово недоступний' });
    return;
  }

  const sentAt = new Intl.DateTimeFormat('uk-UA', {
    timeZone: 'Europe/Kyiv',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date());

  const text = [
    'Нова заявка з сайту ВІКНА-ОБРІЙ',
    '',
    `Ім'я: ${name}`,
    `Телефон: ${phone}`,
    `Послуга: ${service}`,
    `Сторінка: ${page}`,
    `Дата і час: ${sentAt}`
  ].join('\n');

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('submit-lead: Telegram API error', tgRes.status, errText);
      res.status(502).json({ ok: false, error: 'Не вдалося надіслати заявку' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('submit-lead: failed to reach Telegram API', err);
    res.status(502).json({ ok: false, error: 'Не вдалося надіслати заявку' });
  }
};
