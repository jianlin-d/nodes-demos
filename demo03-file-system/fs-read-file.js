/**
 * Created by Jason on 14/09/2016.
 */
const fs = require('fs');
//Asynchronously reads the entire contents of a file
fs.readFile('tmp/message.txt', 'utf8', function (err,data) {
    err ? console.log(err):console.log(data);
});