var swig = require('swig');

module.exports = (app) => {
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', __dirname + '../public/views');
  app.set('view cache', false);
  swig.setDefaults({ cache: false });
};
