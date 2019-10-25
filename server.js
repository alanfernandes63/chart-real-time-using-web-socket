const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));
app.set(path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());

app.use('/', (req, res) => {
    res.render('index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
    sock.emit('teste', req.body);
    res.send('ok server');
});


app.use('/', (req, res) => {
    res.writeHead(200);
});
var sock = null;

io.on('connection', socket => {
    sock = socket;
});

server.listen(3000);