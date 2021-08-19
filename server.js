const express = require('express');
const app=express();
app.use(express.static(__dirname + '/client'));
//SetUp Environment Variable 
const port=process.env.PORT||3000;
app.listen(port,()=>
{
    console.log('Server is Running on Port '+port);
});