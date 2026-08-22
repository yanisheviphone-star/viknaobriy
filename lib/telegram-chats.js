const { kv } = require('@vercel/kv');

// A Redis SET: adding the same chat id twice is a no-op, and membership
// lookup for "already subscribed" comes for free.
const CHAT_IDS_KEY = 'telegram:chat_ids';

async function addChatId(chatId) {
  await kv.sadd(CHAT_IDS_KEY, String(chatId));
}

async function removeChatId(chatId) {
  await kv.srem(CHAT_IDS_KEY, String(chatId));
}

async function getAllChatIds() {
  const ids = await kv.smembers(CHAT_IDS_KEY);
  return Array.isArray(ids) ? ids : [];
}

module.exports = { addChatId, removeChatId, getAllChatIds };
