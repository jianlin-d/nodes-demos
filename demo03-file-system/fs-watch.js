/**
 * Created by Jason on 14/09/2016.
 */
const fs = require('fs');

// Watch for changes on filename, where filename is either a file or a directory
fs.watch('./tmp/', (event, filename) => {
    console.log(`event is: ${event}`);
if (filename) {
    console.log(`filename provided: ${filename}`);
} else {
    console.log('filename not provided');
}
});

//test by append content to file
fs.appendFile('./tmp/message.txt', 'new content', (err) => {
    if (err){
        throw err;
    }

    //console.log('new content was appended to file!');
});

