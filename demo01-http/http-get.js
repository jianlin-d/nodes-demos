/**
 * Created by Jason on 14/09/2016.
 */

//http get is a convinience method for requests without bodies
const http = require('http');
//url only
http.get('http://www.google.com',(res)=>{
    console.log(`Got response from: ${res.statusCode}`);
});
