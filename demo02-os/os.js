/**
 * Created by Jason on 14/09/2016.
 */
//print some OS information by invoking os API
const os = require('os');

console.log('\nhostname:\n-----------------');
console.log(os.hostname());
console.log('\n');

console.log('os type:\n---------------------');
console.log(os.type());
console.log('\n');

console.log('platform :\n---------------------');
console.log(`${os.platform()} ${os.release()}` );
console.log('\n');



console.log('cpu information:\n---------------------');
os.cpus().forEach(function (cpu) {
    console.log(cpu);
});
console.log('\n');

console.log('network interfaces:\n---------------------');
console.log(os.networkInterfaces());
console.log('\n');



//not correct in macOS
//console.log(`\nyour current free memory:\n-----------------\n${(os.freemem()/Math.pow(1024,2)).toFixed(2)} MB`);
