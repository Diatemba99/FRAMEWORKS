const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.get("/home",(req,res) => {
    res.end(" BIENVENUE !");
});


app.get("/guest/:nameUser",(req,res) => {
    res.end("Hello " + req.params.nameUser + ".");
    console.log(req.params.who)
})




app.use((request, response) => {
    response.end("Server is running !");
});

http.createServer(app).listen(3000);