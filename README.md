# CLI Socket-Based Multiple Client Chatroom by Aayush Gupta
The App is coded in NodeJS

## Prerequisites
Node
NPM

## Installing the Dependencies
We have to install the socket.io, socket.io-client and other libraries:
```
npm i socket.io
npm i socket.io-client
npm i express
npm i chalk
```

## Usage
### First We have to start the Server. We can do that by running the following command :
```
node chat-node
```
If there is no error , the server will start successfully and output "ChatRoom Created!" on the console.

### Then we have to start the Client. We have a N number of clients in our CLI application. We begin by adding two clients. Run the following command in another terminal to start the first client.

```
node chat-client
```
If there is no error, the server will output "Client Connected" on console and on the client side it will output " You have joined the Chatroom ". The client will automatically select random messages from "message.txt" file and send it to the chat server. Meanwhile you can also type your own message in last console line and press enter to send it. Thus it can be used in both ways.
By following the same step we can add N number of more clients according to our requirement.
All the clients opened in different terminal windows will continuously send randomly select messages from the text file to each other. The white coloured message in the client console will be the one it has sent whereas the yellow coloured message will be from another client.

## Stopping the CLI App
To stop the CLI app from running we have to press ```(Ctrl+C)``` on the server side terminal. This command will stop the operations at all the opened terminal windows.
