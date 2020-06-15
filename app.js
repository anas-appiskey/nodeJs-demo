// var express = require('express');
// var routes  = require('./routes');
var http  = require('http');
var path  = require('path');
var fs  = require('fs');
const { Z_NEED_DICT } = require('zlib');

const server =http.createServer((req,res)=>{
    // if(req.url==='/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //         if (err) throw err;
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(content)
    //     })
   
    // }
    // if(req.url==='/api/users'){
    //     const users =[
    //         {name : 'anas',age: 21, id:1},
    //         {name : 'jasicca',age: 21, id:2},
    //     ];
    //     res.writeHead(200,{'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users))
   
    // }

    //building file path 
    let filepath = path.join(
        __dirname,'public',
        req.url ==='/' ?'index.html':
         req.url);
         
    // get extension 
    let extname = path.extname(filepath);

    //initial content type 
    let contentType = 'text/html';

    //check ext and set content type

    switch(extname){
        case '.js':
            contentType: 'text/javascript';
            break;
        case '.css':
            contentType: 'text/javascript';
            break;
        case '.json':
            contentType: 'application/json';
            break; 
        case '.png':
            contentType: 'image/png';
            break;
            
        case '.jpg':
            contentType: 'image/jpg';
            break;


    }
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code==='ENONET'){
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{

                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(content,'utf8')

                })
            }
        }
    })
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