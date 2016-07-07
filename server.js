const net = require('net');
var socket = net.Socket();

const server = net.createServer((socket) => {

socket.on('end', function () {
  console.log(' disconnected.');
});

console.log('client socket connection');

socket.on('data', (data) => {
    console.log(data.toString());
  });
});

server.listen('2459', () => {
  console.log('server listening');
  socket.write(data);
});
