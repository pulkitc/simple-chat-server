/*  var express = require('express'),http=require('http');
app=express();
server= http.createServer(app);
var io = require('socket.io').listen(server);  */
 var io = require('socket.io').listen(1122,function(){
 console.log(io.connected);
 });

io.sockets.on('connection', function (socket) {
  socket.on('msg', function (msg) { 
  console.log(socket.id+' rcvd<--'+msg);
  io.sockets.emit('msg', msg); //io.emit('msg', msg);
  console.log('sent--> '+msg);
  
  });
  socket.on('disconnect', function () { 
  console.log('disconnected');
  });
}); 

/* app.get('/', function(req, res){
  res.sendfile(__dirname + '/indx.html');
});

io.sockets.on('connect', function(socket){
  socket.on('chat message', function(msg){
  console.log('got this '+msg);
    io.emit('chat message', msg);
  });
});

app.listen(3000, function(){
  console.log('list ening on *:3000');
}); */
 
