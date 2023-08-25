const express = require("express");
const app = express();
const PORT = 5000;
const postRoutes = require("./routes/postRoute");
const mongoose = require("mongoose");
const cors = require('cors');
const socket = require("socket.io");


app.use(cors())


mongoose
  .connect(
    "mongodb+srv://segalofek:ZC731rJ1QMdg2CDe@cluster0.a9xdejn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Successfully connected to mongodb!"))
  .catch((err) => console.log(err.message));


app.get("/", (req, res) => {
  res.json({ name: "ofek" });
});

app.use(express.json());
app.use("/posts", postRoutes);

const server = app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
},
})

io.on("connection",(socket)=>{
  console.log(`user connected: ${socket.id}`)

  socket.on("join_room",(data)=>{
      socket.join(data)
  })

 
  socket.on("send_message", (data) => {
      socket.broadcast.to(data.room).emit("recieve_message", data);
  });

  socket.on("send_succes", (data) => {
    socket.broadcast.to(data.room).emit("recieve_succes", data);
});

})

