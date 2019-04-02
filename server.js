var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var fs = require('fs');
const axios = require('axios');

app.get('/',function(req,res) {
    res.sendFile('index.html', { root: __dirname });
  });

app.get("/scrape", function(req, res) {
  console.log("scrape initiated");
  axios.get('https://www.entrepreneur.com/latest.rss').then(function(response) {
    // http.get('http://www.entrepreneur.com/latest.rss', function(response) {
    console.log("url passed");
      res.send(response.data);
    });
  });

// A GET route for scraping the echoJS website

// app.get("/scrape", function(req, res) {

//   console.log("hello");

//   // First, we grab the body of the html with request

//   axios.get("https://www.entrepreneur.com/latest.rss").then(function(response) {

   
//     });
//     // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send(response);
//   });
// });

  

app.use(express.static(path.resolve('./public')));

// app.get('/try',function(req,res) {
//   fs.readFile('https://www.entrepreneur.com/latest.rss', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.write(data);
//     res.end();
//   });
//   res.sendFile('https://www.entrepreneur.com/latest.rss', { root: __dirname });
// });

// app.get('https://www.entrepreneur.com/latest.rss', function(req, res) {
//   var name = req.param('name') || 'Somebody';
//   var respondWith = '<?xml version="1.0" encoding="ISO-8859-1"?>';
//   res.status(200);
//   res.setHeader('Content-type', 'text/xml');
//   return res.send(respondWith);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))