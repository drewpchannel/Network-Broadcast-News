const net = require('net');
const socket = new net.Socket();
var os = require("os");
var osName = os.hostname();

socket.connect({port: '2459', host: '10.0.1.34'}, (() => {
}));
process.stdin.on('data', (data) => {
  writeTest(data);
});
socket.on('data', (data) => {
  console.log(data.toString());
});

function writeTest (data) {
  var memData = data.toString();
  switch(memData){
    case "end\n":
    socket.end();
    break;
    default:
    socket.write(data);
  }
}