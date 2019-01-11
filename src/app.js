const express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser');

app.use('/', express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// Database Creation
mongoose.connect('mongodb://localhost/YelpCamp_D_Database', {useNewUrlParser: true});

// api routes
app.use(require('./routes/api-routes/index.js'));

// page routes
app.use(require('./routes/page-routes/index.js'));

app.listen(3000, function () {
    console.log("Server has started!!");
});