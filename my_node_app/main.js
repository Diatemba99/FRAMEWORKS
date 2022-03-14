"use strict";
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router=require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

router.get("/",(req,res)=>{
    res.writeHead(httpStatus.StatusCodes.OK,contentTypes.html);
    utils.getFile("views/index.html",res);
});

router.get("/courses.html",(req,res)=>{
    res.writeHead(httpStatus.StatusCodes.OK,contentTypes.html);
    utils.getFile("views/courses.html",res);
});
router.get("/glob.css",(req,res)=>{
    res.writeHead(httpStatus.StatusCodes.OK,contentTypes.css);
    utils.getFile("public/css/glob.css",res);
});
router.get("/bootsrap.css",(req,res)=>{
    res.writeHead(httpStatus.StatusCodes.OK,contentTypes.css);
    utils.getFile("public/css/bootsrap.css",res);
});
http.createServer(router.handle).listen(port);
console.log(`the server is listenning on port number:${port}`);

