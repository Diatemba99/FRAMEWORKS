const express = require("express");
const http = require("http");

const app = express();

/**
 * app.use((req, res, next) => {
    console.log("In comes a  "+ req.method +"to " + req.url);
    //res.send("Hello, World!");
    next();
});*/



 app.use((req, res) =>{
    //res.writeHead(200, {"Content-Type": "text/plain"});
    //console.log(200, `{"Content-Type": "text/plain"}`);
    console.log("In comes a  "+ req.method +" to " + req.url);

    res.send("Hello, Askan!");
});

http.createServer(app).listen(3000);