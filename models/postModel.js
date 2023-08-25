const mongoose = require("mongoose");

const { Schema } = mongoose;

const postModel = new Schema({
  room_id: { type: String},
  title: { type: String},
  body: { type: String},
});

module.exports = mongoose.model("Post", postModel);
