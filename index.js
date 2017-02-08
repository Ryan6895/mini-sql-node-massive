var massive = require('massive');
var connectionString = require("./config.js")
var massiveInstance = massive.connectSync({connectionString : connectionString.connectionString})
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
var db = app.get('db');
var controller = require('./controller.js');
// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });
controller.getPlanes();
// db.get_planes(function(err, planes){
//     console.log(err, planes)
// })


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
