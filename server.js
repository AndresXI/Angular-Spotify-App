//Install express server
// const express = require('express');
// const app = express();
var cors = require('cors');
// // configure server 
// const path = require('path'); 
// const http = require('http'); 

// const port = process.env.PORT || 3001; 

const path = require("path");
const express = require("express");
const app = express();



// app.use(cors({
//   credentials: true,
//   origin: true
// }))

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });
// app.options("*", cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, application/x-www-form-urlencoded, Accept");
//   next();
// });



// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for only example.com.' })
// })

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});










app.use(express.static(__dirname + '/dist/ng-spotify')); 

// Send all requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/ng-spotify/index.html'));
});



app.listen(3000, () => {
  console.log("Listening on port 3000");
});
