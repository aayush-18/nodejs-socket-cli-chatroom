const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:4400");
const repl = require('repl');
const chalk = require('chalk');
const fs = require('fs');

ioClient.on('connect', () => {
    console.log(chalk.blue('=== You have joined the Chatroom ==='));
});
ioClient.on('disconnect', function() {
    socket.emit('disconnect');
    console.log(chalk.red("Client Disconnected..."))
});
ioClient.on('message', (data) => {
      const cmd = data
      console.log(chalk.yellow(data));
});
fs.readFile('message.txt', function(err, data){
  if(err) throw err;
  data+='';
  var lines = data.split('\n');
  let i;
  for(i=0;i<(lines.length * 3);i++){
    (function(index) {
        setTimeout(function() {
          randomIndex = Math.floor(Math.random()*(lines.length - 1));
          console.log(lines[randomIndex]);
          ioClient.send(lines[randomIndex]);
        }, index*4000);
    })(i);
  }
});
repl.start({
    prompt: '',
    eval: (cmd) => {
        ioClient.send(cmd);
    }
})
