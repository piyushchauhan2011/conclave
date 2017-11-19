const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
let listener;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {title: 'Conclave'});
});

app.get('/demo', function (req, res) {
  res.render('demo', {title: 'About'});
});

app.get('/idLength', function (req, res) {
  res.render('idGraph');
});

app.get('/opTime', function (req, res) {
  res.render('timeGraph');
})

app.get('/arraysGraph', function (req, res) {
  res.render('arraysGraph');
})

var srv = app.listen(port, function() {
	console.log('Listening on '+port)
})

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}))
