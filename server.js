//Install express server
const express = require('express');
const app = express();
var cors = require('cors');
// configure server 
const path = require('path'); 
const http = require('http'); 

const port = process.env.PORT || 3001; 





app.use(cors({
  credentials: true,
  origin: true
}))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});



app.use(express.static(__dirname + '/dist/ng-spotify')); 


const server = http.createServer(app); 

server.listen(port, () => console.log("Corse Enaabled")); 
