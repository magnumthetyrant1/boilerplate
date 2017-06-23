const open = require('open');
module.exports = (port) => {
  open('https://localhost/' + port);
};
