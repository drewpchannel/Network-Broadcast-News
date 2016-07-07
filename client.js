const net = require('net');
const socket = new net.Socket();

socket.connect({port: '2459', host: '10.0.1.34'}, (() => {
  socket.on('data', (data) => {
    console.log('on is working' + data.toString());
  });
}));
process.stdin.on('data', (data) => {
    writeTest(data);
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