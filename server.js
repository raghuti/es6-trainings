var express = require("express");
var app = express();

app.use(express.static(__dirname));

// app.get("/", function(req, res){
//     res.sendFile(__dirname+"/step9-ajax.html");
// });
app.get("/", function(req, res){
    res.sendFile(__dirname+"/step11-modules.html");
});
app.get("/data", function(req, res){
    res.sendFile(__dirname+"/data.xml");
});

app.listen(1234);
console.log("webserver is now live on http://localhost:1234");

