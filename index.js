var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
/////////files below//////////
var ingredientCtrl = require('./controllers/ingredientCtrl');
/////////////////////////////
var app = express();
var port = 1000;
////////////////////////////
app.use(bodyParser.json());

var mongoUri = 'mongodb://localhost:27017/tacos';
mongoose.connect(mongoUri); //default port number to connect to mongoose
//second part says once you open connection one time, it'll consolelog
//you can put url in 'open' area
mongoose.connection.once('open', function(){
  console.log('successfully connected to mongodb');
});



/////////////////functions//////////////////////
app.post('/api/ingredient', ingredientCtrl.create);
app.get('/api/ingredient', ingredientCtrl.read);
app.put('/api/ingredient', ingredientCtrl.update);
app.delete('/api/ingredient:id', ingredientCtrl.remove);
















app.listen(port, function(){
  console.log('now listening at port ' + port);
});
