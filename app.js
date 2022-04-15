const datagram = require("dgram");
const socket = datagram.createSocket("udp4");
const host = "0.0.0.0";
const port = 8080;

//list incoming messages
socket.on("message", (msg, recvInfo) => {
    //display msg and sender info
    console.log(`I have already recveived ${msg} from ${recvInfo.address}:${recvInfo.port}`);
});
socket.bind(port, host);
