import dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();

dotenv.config({ path: path.join(__dirname, "/config/.env") });

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
    dbName: process.env.MONGO_DB_NAME,
};

// export default minio;
