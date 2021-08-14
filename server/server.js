const express = require("express");
const app = express();
const socket = require("socket.io");
const colors = require("colors");
const cors = require("cors");
const {userJoin, getCurrentUser, userDisconnect} = require("./users");

const PORT = 5000;
app.use(express());
app.use(cors());

let server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});

let io = socket(server);

io.on("connection", (socket) => {
    console.log('Connected');
    socket.on("join_room", ({username, room}) => {
        console.log(socket.id, "=id");
    })
})