var express = require('express');
var app = express();
var pug = require("pug");

app.use("/assets", express.static(__dirname+"/assets"));
app.engine('pug',require('pug').__express);
app.set('view engine','pug');


app.get("/", function(req, res){ //diese funktion nennt sich callback
	var data = {signIn: null};
	res.render(__dirname+'/pages/index', {data:data});
	// var compileFunction = pug.compileFile('./pages/index.pug');
	// var html = compileFunction(data);
	// res.send(html); //der ganze backend scheiß
	
});

app.get("/signin", function(req, res){ 
	var data = {signIn: 0};
	res.render(__dirname+'/pages/index', {data:data});
});
app.get("/register", function(req, res){ 
	var data = {signIn: 1};
	res.render(__dirname+'/pages/index', {data:data});
});

app.get("/findcompany", function(req, res){ 


/*var html = pug.renderFile('./template/FindCompanyPage.pug');
res.send(html);*/

var data = {
	message:'Hello world',
	lists : [ "Company Name", "Company Field", "Company Age", "Foundet", "Area"],
	urls : './FindCompanyPage.pug'
} 


res.render(__dirname+'/pages/FindCompany', {data:data});


});

app.get("/findpeople", function(req, res){ 

var html = pug.renderFile('./pages/FindPeople.pug');
res.send(html);
});

app.get("/findrandom", function(req, res){ 

var html = pug.renderFile('./pages/FindRandom.pug');
res.send(html);
});


//als beispiel für res.send '<strong style="color: red">Hello World!</strong>'
//erster parameter = routerS
//zweiter parameter = callback
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
