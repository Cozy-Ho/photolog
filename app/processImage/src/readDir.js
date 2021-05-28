import path from "path";
import fs from "fs";

const __dirname = path.resolve();

export function readDir(dateString) {
    const directoryPath = path.join(__dirname, "data/" + dateString);
    let ret_list = [];
    fs.readdirSync(directoryPath).forEach(file => {
        ret_list.push(file);
    });
    return ret_list;
}
