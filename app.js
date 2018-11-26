const fs = require('fs')
fs.rename('before.json', 'after.json', (err) => {
if (err) {
return console.error(err)
}
//done
})

fs.appendFile('greeting.txt',"Hello Fs Module");

const os=require('os');
var user=os.userInfo();
console.log(user);

var gigaByte = 1 / (Math.pow(1024, 3));
console.log('Total Memory', os.totalmem() * gigaByte, 'GBs');
console.log('Available Memory', os.freemem() * gigaByte, 'GBs');
console.log('Percent consumed', 100 * (1 - os.freemem() / os.totalmem()));

console.log(os.arch());

fs.appendFile('greeting.txt',"Hello Fs Module welcome "+user.username+" there sadsaasd");

fs.appendFile('greeting.txt',`Hello Dears,My name is ${user.username}`);
