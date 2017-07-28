
var express = require('express');
var app = express();
var pug = require("pug");
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/assets"));
app.engine('pug',require('pug').__express);
app.set('view engine','pug');
app.set('views', './build/pages');

//require('css/materialize.css');
//window.jQuery = require('jquery');
//window.$ = require('jquery');
//require('js/materialize.js');
//require('materialize-css/js/init.js');

app.get("/", function(req, res){ //diese funktion nennt sich callback

	var data = {signIn: null};
	res.render(__dirname+'/pages/index', {data:data});
});

app.post('/searchindex', function(req, res) {
    var search_ = req.body.search;
    res.redirect('http://www.google.com/search?q=' + search_ );
});

app.get("/signin", function(req, res){
	var data = {signIn: 0};
	res.render(__dirname+'/pages/index', {data:data});
});

app.get("/profilemain", function(req, res){
	var data = {signIn: 1};
	res.render(__dirname+'/pages/index', {data:data});
});

app.get("/findcompany", function(req, res){
	res.render('FindCompany', {});
});

app.get("/findpeople", function(req, res){
	res.render('FindPeople', {});
});

app.get("/findrandom", function(req, res){
	res.render('FindRandom', {});
});

app.post('/search', function(req, res) {
    var company_name = req.body.name;
    var company_age = req.body.age;
    res.redirect('http://www.google.com/search?q=' + company_name + '+' + company_age);
});

app.get("/calendar", function(req, res){
	res.render(__dirname+'/pages/calendar.pug');
});

app.get("/register", function(req, res){
	res.render(__dirname+'/pages/register.pug');
});

app.get("/musterprofile", function(req, res){
	res.render(__dirname+'/pages/musterprofile.pug');
});
/*als beispiel für res.send '<strong style="color: red">Hello World!</strong>'*/

app.get("/musterknowledge", function(req, res){
	res.render(__dirname+'/pages/musterknowledge.pug');
});

app.get("/mustercompany", function(req, res){
	res.render(__dirname+'/pages/mustercompany.pug');
});

app.listen(3000, function(){
	console.log("bla bla port 3000")
});

// comment, yo