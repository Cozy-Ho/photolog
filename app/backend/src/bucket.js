import Minio from "minio";

export default class Client {
    constructor(config) {
        this.minioClient = new Minio.Client(config);
    }
    getBucketList() {
        this.minioClient.listBuckets(function (err, buckets) {
            if (err) return console.log(err);
            console.log("buckets :", buckets);
        });
    }

    deleteBucket(bucketName) {
        this.minioClient.removeBucket(bucketName, function (err) {
            if (err) return console.log("unable to remove bucket.");
            console.log("Bucket removed successfully.");
        });
    }

    createBucket(bucketName) {
        this.minioClient.makeBucket(bucketName, "us-east-1", function (err) {
            if (err) return console.log("Error creating bucket.", err);
            console.log('Bucket created successfully in "us-east-1".');
        });
    }
    stream(bucketName) {
        var stream = this.minioClient.listObjectsV2(bucketName, "", true);
        stream.on("data", function (obj) {
            console.log(obj);
        });
        stream.on("error", function (err) {
            console.log(err);
        });
    }
    getObject(bucketName, objectName) {
        var size = 0;
        this.minioClient.getObject(bucketName, objectName, function (err, dataStream) {
            if (err) {
                return console.log(err);
            }
            dataStream.on("data", function (chunk) {
                size += chunk.length;
                console.log(chunk.toString());
            });
            dataStream.on("end", function () {
                console.log("End. Total size = " + size);
            });
            dataStream.on("error", function (err) {
                console.log(err);
            });
        });
    }
    downloadObject(bucketName, objectName, downloadDir) {
        var size = 0;
        this.minioClient.fGetObject(bucketName, objectName, downloadDir, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("success");
        });
    }
    uploadObject(bucketName, objectName) {
        var Fs = require("fs");
        var file = "/tmp/40mbfile";
        var fileStream = Fs.createReadStream(file);
        var fileStat = Fs.stat(file, function (err, stats) {
            if (err) {
                return console.log(err);
            }
            this.minioClient.putObject(
                "mybucket",
                "40mbfile",
                fileStream,
                stats.size,
                function (err, objInfo) {
                    if (err) {
                        return console.log(err); // err should be null
                    }
                    console.log("Success", objInfo);
                }
            );
        });
    }
}

// export function getBucketList(minioClient) {
//     minioClient.listBuckets(function (err, buckets) {
//         if (err) return console.log(err);
//         console.log("buckets :", buckets);
//     });
// }

// export function deleteBucket(minioClient, bucketName) {
//     minioClient.removeBucket(bucketName, function (err) {
//         if (err) return console.log("unable to remove bucket.");
//         console.log("Bucket removed successfully.");
//     });
// }

// export function createBucket(minioClient, bucketName) {
//     minioClient.makeBucket(bucketName, "us-east-1", function (err) {
//         if (err) return console.log("Error creating bucket.", err);
//         console.log('Bucket created successfully in "us-east-1".');
//     });
// }
