var express = require('express');
var app = express();
var pug = require("pug");



app.get("/", function(req, res){ //diese funktion nennt sich callback
	var compileFunction = pug.compileFile('./template/index_1.pug');
	var data = {name: "Ina"};
	var html = compileFunction(data);
	res.send(html); //der ganze backend scheiß
});
//als beispiel für res.send '<strong style="color: red">Hello World!</strong>'
//erster parameter = router
//zweiter parameter = callback

app.get("/main", function(req, res){
	var html = pug.renderFile('./template/main.pug')
	res.send(html)
});
app.get("/contactus", function(req, res){
	var html = pug.renderFile('./template/main.pug')
	res.send(html)
});
app.get("/faqs", function(req, res){
	var html = pug.renderFile('./template/main.pug')
	res.send(html)
});

app.get("/login", function(req, res){
	res.send("goodbye World")
});

app.listen(3000, function(){
	console.log("bla bla port 3000")
});
