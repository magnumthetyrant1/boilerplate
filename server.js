var
  express = require('express'),
  path    = require('path'),
  favicon = require('serve-favicon'),
  port    = process.env.PORT || 5000,
  app     = express()
;

// Enable the application to access static files.
// =============================================================================
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

// Set the view engine of the application
// =============================================================================
require('./config/swig')(app);

// Set the routes for the application
// =============================================================================
require('./config/routes')(app);

// Set the default port for the application.
// =============================================================================
app.listen(port, (err) => {
  console.log('Running on port: ' + port + '.');
});

/*----------------------------END OF FILE-------------------------------------*/
