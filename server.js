const
  express = require('express'),
  path    = require('path'),
  favicon = require('serve-favicon'),
  port    = process.env.PORT || 2000,
  app     = express()
;

// Enable the application to access static files.
// =============================================================================
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// Set the view engine of the application
// =============================================================================
require('./config/ejs')(app);


// Set the routes for the application
// =============================================================================
require('./config/routes')(app);

// Set the default port for the application.
// =============================================================================
app.listen(port, () => {
  console.log('Running on port: ' + port + '.');
  require('./config/open')(port);
});

/*----------------------------END OF FILE-------------------------------------*/
