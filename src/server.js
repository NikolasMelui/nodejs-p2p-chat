'use strict';

// Libraries
const net = require('net');

// Config
const { APPLICATION_HOST, APPLICATION_PORT } = require('./config');

net
  .createServer((socket) => {
    console.log('A client connected');
    socket.on('data', (data) => socket.write(data));
  })
  .listen(APPLICATION_PORT, APPLICATION_HOST, () =>
    console.log(
      `Server is listening on ${APPLICATION_HOST}:${APPLICATION_PORT}`,
    ),
  );
