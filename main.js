var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
console.log('Listening on port: ' + process.env.PORT);
app.listen(process.env.PORT || 3000);
