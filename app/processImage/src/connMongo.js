import * as config from "../config/config.js";
import mongoose from "mongoose";

const MONGO_URI =
    "mongodb://" +
    config.mongo.id +
    ":" +
    config.mongo.pw +
    "@" +
    config.mongo.endPoint +
    ":" +
    config.mongo.port;

export async function connect() {
    await mongoose
        .connect(MONGO_URI, { useNewUrlParser: true })
        .then(() => console.log("success to connect MongoDB"))
        .catch((err) => console.log(err));
}
