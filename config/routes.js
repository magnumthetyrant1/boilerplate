var express = require('express');

module.exports = function(app){

  // Route for the home page
  //===================================================
  app.get('/', function(req, res){
      res.render('index', {
          title : 'Home',
          class : 'active'
      });
  });
};// End of routes.js
