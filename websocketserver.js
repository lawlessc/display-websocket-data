var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
 res.sendfile(__dirname + '/index.html'); 
});

io.on('connection', function (socket) {
    io.emit('connection data', { clientid :  socket.id });
    io.emit('request data', { requestid : socket.request.headers});
});

    console.log("listening on 80");

//recieve client id, request id and duration.