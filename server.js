let express = require('express');
let ejs     = require('ejs');
let logger  = require('morgan');
let bodyParser = require('body-parser');
let mongo   = require('mongodb');
let path    = require('path');

let app = express();

app.set('view engine' , 'ejs');
app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/front'));


app.get('/',function(req,res,next)
{
	res.sendFile(__dirname+'/front/index.html');
});
app.get('/item',function(req,res,next){
	res.sendFile(__dirname+'/front/item.html');
});
app.listen(3000,()=>{
	console.log("Server started");
});