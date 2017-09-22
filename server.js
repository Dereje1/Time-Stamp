// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:dateVal", function (req, res) {
  let parsedDateUnix,returnObject

  //if user param is already a number just use number otherwise parse with builtin function
  parsedDateUnix = Number(req.params.dateVal) ? Number(req.params.dateVal) : Date.parse(req.params.dateVal)

  if(parsedDateUnix){//if valid unix date
    let naturalDate = new Date(parsedDateUnix)
    returnObject = {"unix":parsedDateUnix.toString(),"natural":naturalDate.toDateString()}
  }
  else{
    returnObject = {"unix":null,"natural":null}
  }
  res.send(returnObject)
});

app.get("/", function (req, res) {//got this from glitch , basically serves the index
  res.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
