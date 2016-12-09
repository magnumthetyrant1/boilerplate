// set the view engine to ejs
module.exports = (app) => {
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/../public/views');
};
