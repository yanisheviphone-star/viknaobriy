# ВІКНА-ОБРІЙ — сайт

Чистий HTML/CSS/JS (React + Babel через CDN, без збірки) + serverless-функції на Vercel.

## Заявки з сайту → Telegram

Коли хтось надсилає форму на сайті, `api/submit-lead.js` надсилає повідомлення
в Telegram **усім користувачам, які хоч раз писали боту `/start`**. Список
chat_id зберігається не у файлі (у serverless-функцій Vercel немає постійної
файлової системи між викликами), а в Vercel KV (Upstash Redis).

Як це працює:
1. Людина знаходить бота в Telegram і надсилає `/start`.
2. Telegram викликає наш webhook `api/telegram-webhook.js` → chat_id
   зберігається в KV (`SADD`, дублікати ігноруються самі).
3. При новій заявці `api/submit-lead.js` бере всі збережені chat_id (`SMEMBERS`)
   і розсилає повідомлення кожному. Якщо комусь надіслати не вдалось
   (заблокував бота, видалив чат) — це логується й не заважає надіслати
   решті; такий chat_id додатково видаляється зі списку.

## Змінні середовища (Vercel → Project Settings → Environment Variables)

| Змінна | Обов'язкова | Звідки взяти |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | так | [@BotFather](https://t.me/BotFather) |
| `KV_REST_API_URL` | так | З'являється автоматично після підключення Vercel KV (нижче) |
| `KV_REST_API_TOKEN` | так | Так само, автоматично |
| `TELEGRAM_WEBHOOK_SECRET` | рекомендовано | Придумайте самі (будь-який довгий випадковий рядок) |
| `TELEGRAM_CHAT_ID` | ні (legacy) | Старий одиночний chat_id. Використовується лише як резерв, якщо в KV ще нікого немає |

## Крок 1 — підключити Vercel KV

1. Vercel Dashboard → ваш проєкт → вкладка **Storage** → **Create Database** → **KV** (Upstash Redis під капотом).
2. Дайте назву, оберіть регіон, створіть.
3. На кроці підключення оберіть саме цей проєкт (`vikna-obriy`) — Vercel сам додасть
   `KV_REST_API_URL`, `KV_REST_API_TOKEN` (і ще пару змінних) у Environment Variables
   для Production/Preview/Development.
4. Задеплойте проєкт ще раз (або зробіть redeploy), щоб функції підхопили нові змінні.

## Крок 2 — задати TELEGRAM_WEBHOOK_SECRET

У Environment Variables додайте `TELEGRAM_WEBHOOK_SECRET` з будь-яким випадковим
значенням (наприклад, згенерованим через `openssl rand -hex 32`). Він захищає
`/api/telegram-webhook` від сторонніх запитів, що намагались би підкинути
фейкові chat_id.

## Крок 3 — зареєструвати webhook у Telegram

Після деплою (коли `TELEGRAM_BOT_TOKEN`, KV-змінні та `TELEGRAM_WEBHOOK_SECRET`
вже задані на Vercel) один раз викличте `setWebhook` — просто відкрийте цей URL
у браузері (підставивши свої значення):

```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=https://www.vikna-obriy.com/api/telegram-webhook&secret_token=<TELEGRAM_WEBHOOK_SECRET>
```

Успішна відповідь виглядає так: `{"ok":true,"result":true,"description":"Webhook was set"}`.

Перевірити, що вебхук зареєстрований і Telegram не отримує помилок:

```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getWebhookInfo
```

Після цього кожен, хто напише боту `/start`, автоматично почне отримувати
сповіщення про нові заявки з сайту.
