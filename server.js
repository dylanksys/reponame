var express = require ('express');

var scool = require('../routers/scool');

var app = express();

app.use('/', scool);

app.listen(9000, function () {
  console.log('theapp listening on port 9000');
};
