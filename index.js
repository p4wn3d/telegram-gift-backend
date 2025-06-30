require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(express.json());

const bot = new TelegramBot(process.env.BOT_TOKEN);
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get('/', (req, res) => res.send('Gift Roulette API'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Сервер запущен');
});
