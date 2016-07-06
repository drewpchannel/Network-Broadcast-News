const net = require('net');
const client = new net.Socket();

client.connect({port: '6969', host: 'localhost'}, (() => {

}));

client.on('data', (data) => {
  console.log(data.toString());
});