/**
 * Created by Jason on 14/09/2016.
 */

// simple request demo
const http = require('http');
const querystring = require('querystring');

var postData = querystring.stringify({
    'msg' : 'Hello World!'
});

const options = {
    hostname:'www.baidu.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    },
    method:'POST',
    //port:80,
    path:'/upload'//default path:'/',
    //agent:false

};
var keepAliveAgent = http.Agent({keepAlive:true});
options.keepAliveAgent = keepAliveAgent;
var req = http.request(options,(res)=>{
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.')
    });
});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();
