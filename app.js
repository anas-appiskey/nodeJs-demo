// var express = require('express');
// var routes  = require('./routes');
var http  = require('http');
var path  = require('path');
var fs  = require('fs');

const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end('<h1>home page</h1>')
    }
})

const PORT = process.env.PORT || 5000
server.listen(PORT,()=>console.log(`server running on Port ${PORT}`));


















// var urlencoded  = require('url');
// var bodyParser  = require('body-parser');
// var json  = require('json');
// var logger  = require('logger');
// var methodOverride = require ('method-override');

// const person = require("./person")

// var nano =require('nano') ('http://localhost:5984');
// var db = nano.use('address');
// var app = express;

// app.set('port',process.env.PORT || 3000);

// app.set('views',path.join(__dirname))



// const Person = require('./person');

// const person1 = new Person('alex',22)
// const person2 = new Person('aRx',24)

// person1.greetings();
// person2.greetings();