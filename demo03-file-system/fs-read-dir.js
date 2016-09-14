/**
 * Created by Jason on 14/09/2016.
 */
const fs = require('fs');

//print all directiories & files
fs.readdir('./tmp/', function (err, files) {
    console.log(files);
});