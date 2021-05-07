import path from "path";
import fs from "fs";

const __dirname = path.resolve();

export async function readDir(dateString) {
    const directoryPath = path.join(__dirname, "data/" + dateString);
    let ret_list = [];
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log("Unable to scan directory: " + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            // console.log(file);
            ret_list.push(file);
        });
    });
    return ret_list;
}
