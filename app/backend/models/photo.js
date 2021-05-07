import mongoose from "mongoose";
const { Schema } = mongoose;

export const photoSchema = new Schema({
    id: {
        type: String,
        required: true,
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
    date: {
        type: Number,
        required: false,
    },
});
