const io = require("socket.io");
const server = io.listen(4400);

server.on('connection', (socket) => {
  console.log('Client Connected');
  socket.on('message', (evt) => {
      console.log(evt)
      socket.broadcast.emit('message', evt);
  });
  socket.on('disconnect', (evt) => {
      console.log('Client Disconnected...');
  });
});
console.log("ChatRoom Created!");
