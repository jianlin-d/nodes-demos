/**
 * Created by Jason on 14/09/2016.
 */
const fs = require('fs');

//Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a buffer.
fs.appendFile('tmp/message.txt', 'data to append', (err) => {
    if (err){
        throw err;
    }

    console.log('The "data to append" was appended to file!');
});