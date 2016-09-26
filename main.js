var express = require('express');
var app = express();
<<<<<<< HEAD

app.set('views', `${__dirname}`);
app.engine('html', pug.renderFile);
app.set('view engine', 'html');

app.use(express.static(`${__dirname}/public`));

app.get('/', function (req, res) {
	res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
	console.log(`Server listening on port: ${process.env.PORT || 3000}`);
});
=======
app.use(express.static(__dirname + '/public'));
console.log('Listening on port: ' + process.env.PORT);
app.listen(process.env.PORT || 3000);
>>>>>>> 61ebeb5aeb3061d5198f721c8268870bb5655c9e
