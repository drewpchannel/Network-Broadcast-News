const net = require('net');
const fs = require('fs');
const chatLog = fs.createWriteStream('./chatLog');

const server = net.createServer((socket) => {
  server.on('data', (data) => {
    console.log('data received');
  });
});

server.listen('6969', () => {
  console.log('server started');
});