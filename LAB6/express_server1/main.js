const express = require("express");
const http = require("http");

const app = express();

app.use((req, res) => {
    console.log("In comes a request to: "+ req.url);
    res.send("Hello, World!");
})

http.createServer(app).listen(3000);