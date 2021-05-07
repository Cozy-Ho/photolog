import { photoSchema } from "../models/photo.js";
import mongoose from "mongoose";

export async function createPhoto(args) {
    let Photo = mongoose.model(args.tableName, photoSchema);
    try {
        const photo = await Photo.findOneAndUpdate(
            {
                id: args.id,
            },
            {
                title: args.fileName,
                lat: args.latitude,
                log: args.longitude,
                createTime: 0,
            },
            { upsert: true }
        );
        console.log(photo);
        return photo;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function deletePhoto(args) {
    let Photo = mongoose.model(args.tableName, photoSchema);
    try {
        const photo = await Photo.findOneAndDelete({
            id: args.id,
        });
        console.log(photo);
        return "삭제 완료";
    } catch (err) {
        console.log(err);
        return "삭제 실패";
    }
}
