import * as config from "./config/config.js";
import TelegramBot from "node-telegram-bot-api";
import exifr from "exifr";
import Client from "./src/bucket.js";

import { readDir } from "./src/readDir.js";

// replace the value below with the Telegram token you receive from @BotFather
const token = config.bot.token;
const minioSettings = {
    endPoint: config.minio.endPoint,
    port: config.minio.port,
    useSSL: config.minio.useSSL,
    accessKey: config.minio.accessKey,
    secretKey: config.minio.secretKey,
};

var minio = new Client(minioSettings);
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "Received your message");
});

readDir("subdata").then((res) => console.log(res));
// console.log(files);
// exifr.parse("./temp/porf.jpg").then((output) => console.log(output));

// TODO: Image UPload => process image => insert Minio & DB
