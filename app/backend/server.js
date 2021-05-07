import Minio from "minio";
import * as config from "./config/config.js";
import Client from "./src/bucket.js";

var settings = {
    endPoint: config.minio.endPoint,
    port: config.minio.port,
    useSSL: config.minio.useSSL,
    accessKey: config.minio.accessKey,
    secretKey: config.minio.secretKey,
};

var minio = new Client(settings);
// minio.getBucketList();
// minio.stream("test");
minio.getObject("test", "sample.txt");
// minio.downloadObject("test", "202104.pdf", "/Users/v13205/downloads/result.pdf");
// minio.createBucket("test");
// minio.deleteBucket("test");
