
var express = require('express');
var app = express();


app.use('/resources', express.static(__dirname + "/resources/"));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect 


// set the view engine to ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('partials/index');
});

// music 
app.get('/music', function(req, res) {
    res.render('partials/music');
});

// artwork 
app.get('/video', function(req, res) {
    res.render('partials/video');
});

// merchandise 
app.get('/about', function(req, res) {
    res.render('partials/about');
});


app.on('listening',function(){
    console.log('ok, server is running');
});


app.listen(8080);

