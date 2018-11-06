require('dotenv').config();
const express = require('express');
//create express application instance function. 
const app = express();

//get function recieves request on path (/ = root), then 
//uses a call back that takes in request and sends a response.
//usses http request from node.

app.get('/Haiku/Fall', function(request, response) {
    response.send('Fall walking westward,\nlong drunken shadows looming,\nthe tired sun sets.');
});

app.get('/Haiku/Duck', function(request, response) {
    response.send('Webbed fisher fowl,\nslipstreaming the lillypads,\nmuck is your supper.');
});

app.get('/Haiku/Samurai', function(request, response) {
    response.send('Cherryblossom tree,\nhappily I bleed in shade,\nmy last stroke was strong.');
});
//express has a listen method that allows you to assign

//option with callbackt
app.listen(process.env.PORT, function(){
    console.log('Listening on port' + process.env.PORT);
});