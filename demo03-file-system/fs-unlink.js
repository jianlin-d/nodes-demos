/**
 * Created by Jason on 14/09/2016.
 */
const fs = require('fs');

const fileEndosePath = 'tmp/message.txt';
//check file access permisssion
fs.access(fileEndosePath, fs.R_OK | fs.W_OK, (err) => {
    console.log(err ? 'no access!' : 'can read/write');
});

//asynchronously delete file
fs.unlink('tmp/message.txt', function (err) {
    if (err){
        console.log(`ERROR:Failed to delete file${err}`);
    }
});