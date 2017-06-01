var express = require('express');
var app = express();
var pug = require("pug");

app.use("/public", express.static(__dirname+"/public"));
app.engine('pug',require('pug').__express);
app.set('view engine','pug');


app.get("/", function(req, res){ //diese funktion nennt sich callback
	var compileFunction = pug.compileFile('./pages/index.pug');
	var data = {name: "Ina Asra Shofa"};
	var html = compileFunction(data);
	res.send(html); //backend&co
});

app.get("/findcompany", function(req, res){
	var data = {
		message:'Hello world',
		lists : [ "Company Name", "Company Field", "Company Age", "Foundet", "Area"],
		urls : './FindCompanyPage.pug'
	}
	res.render(__dirname+'/pages/FindCompany', {data:data});
});

/*var html = pug.renderFile('./template/FindCompanyPage.pug');
res.send(html);*/

app.get("/findpeople", function(req, res){
	var html = pug.renderFile('./pages/FindPeople.pug');
	res.send(html);
});

app.get("/findrandom", function(req, res){
	var html = pug.renderFile('./pages/FindRandom.pug');
	res.send(html);
});

/*als beispiel für res.send '<strong style="color: red">Hello World!</strong>'
//erster parameter = routerS
zweiter parameter = callback*/

app.get("/contactus", function(req, res){
	var html = pug.renderFile('./pages/contactus.pug')
	res.send(html)
});

app.get("/faqs", function(req, res){
	var html = pug.renderFile('./pages/faqs.pug')
	res.send(html)
});




app.get("/profile", function(req, res){
	var html = pug.renderFile('./pages/profile.pug');
	res.render(__dirname+'/pages/profile', {data:data});
});



app.listen(3000, function(){
	console.log("bla bla port 3000")
});
