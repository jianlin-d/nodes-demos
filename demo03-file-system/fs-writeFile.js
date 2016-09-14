/**
 * Created by Jason on 14/09/2016.
 */
const fs = require('fs');

//Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.
fs.writeFile('./tmp/message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
console.log('It\'s saved!');
});