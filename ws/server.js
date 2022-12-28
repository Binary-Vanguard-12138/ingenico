const { WebSocketServer } = require("ws");
const protobuf = require("protobufjs");
const proto = require("./ecr-json-api");

const wss = new WebSocketServer({ port: 8086 });

const messageInType = proto.lookupType("EcrToTerminalMessage");
const messageOutType = proto.lookupType("TerminalToEcrMessage");

let wsServer;
const awsClient = [];

wss.on("connection", function connection(ws, req) {
    if (req.url?.includes("server")) {
        wsServer = ws;
        console.log("New server connection");
        ws.on("message", function message(data) {
            const message = messageInType.decode(new Uint8Array(data));
            console.info("From business app", JSON.stringify(message));
            awsClient[0].send(data);
        });
    } else {
        console.log("New client connection");
        if (!wsServer) {
            console.error("No server found, disconnecting");
            ws.close();
            return;
        }
        awsClient.push(ws);
        wsServer.send(`[websocket-message-broker] Client connected`);
        ws.on("message", function message(data) {
            const message = messageOutType.decode(new Uint8Array(data));
            console.info("From terminal", JSON.stringify(message));
            wsServer.send(data);
        });
    }
});
