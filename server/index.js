const liveServer = require('live-server');

const params = {
  prot: 5500,
  host: 'localhost',
  root: './client',
  open: false,
};

liveServer.start(params);
