var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/js-step2-ajax-fun.html");
});
app.get("/data", function(req, res){
    res.sendFile(__dirname+"/data.xml");
});

app.listen(1234);
console.log("webserver is now live on http://localhost:1234");

