var express = require('express');
var pug = require('pug');
var app = express();

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
