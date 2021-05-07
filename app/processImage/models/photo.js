import mongoose from "mongoose";
const { Schema } = mongoose;

export const photoSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: false,
        },
        lat: {
            type: String,
            required: false,
        },
        log: {
            type: String,
            required: false,
        },
        createTime: {
            type: Number,
            required: false,
        },
    },
    { collection: "photos" }
);
