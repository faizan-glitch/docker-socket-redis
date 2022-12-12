import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {

});

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
    console.log(`Websocket server listening on port ${PORT}`);
});