import path from "path";
import dotenv from "dotenv";
const __dirname = path.resolve();

dotenv.config({ path: path.join(__dirname, "/config/.env") });

console.log(process.env.TOKEN);
export const bot = {
    token: process.env.TOKEN,
};

export const minio = {
    endPoint: process.env.SERVER_NAME,
    port: parseInt(process.env.MINIO_PORT, 10),
    useSSL: process.env.USESSL.toUpperCase() === "FALSE" ? false : true,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
};

export const mongo = {
    endPoint: process.env.SERVER_NAME,
    port: process.env.MONGO_PORT,
    id: process.env.MONGO_ID,
    pw: process.env.MONGO_PW,
};
