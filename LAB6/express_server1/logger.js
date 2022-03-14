const express = require("express");
const logger = require("morgan");
const http = require("http");
const { response } = require("express");

const app = express();
app.use(logger("short"));

app.use((request, response) => {
    response.end("Hello, World !");
});

http.createServer(app).listen(3000);