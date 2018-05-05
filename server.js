var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/:dateVal", function (req, res) {
  let parsedDateUnix,returnObject
  //if user param is already a number just use number otherwise parse with builtin function
  parsedDateUnix = Number(req.params.dateVal) ? Number(req.params.dateVal) : Date.parse(req.params.dateVal)
  let naturalDate = new Date(parsedDateUnix)

  if(parsedDateUnix && naturalDate!="Invalid Date") {//if valid unix date & valid parsed date
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

app.use(function (err, req, res, next) {
  try {
    decodeURIComponent(req.path);
  }
  catch (e) {
    res.send({"unix":null,"natural":null,"error":e.message})
  }
})
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
