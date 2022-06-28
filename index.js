var http = require('http');


const express = require('express');
const app = express();

app.get('/healthcheck',(req,res)=>{
    res.json({"status":"ok"});
})

app.listen(8080);


