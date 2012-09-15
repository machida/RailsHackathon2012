
/**
 * Module dependencies.
 */

var express = require('express')
  , pjax = require('express-pjax')
  , routes = require('./routes')

var app = module.exports = express.createServer(express.logger(),express.bodyParser());


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(pjax());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/about_en', routes.about_en);
app.get('/information', routes.information);
app.get('/schedule', routes.schedule);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
