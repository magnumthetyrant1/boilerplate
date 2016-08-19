const open = require('open');

module.exports = (port) => {
  open('http://localhost:' + port);
};
