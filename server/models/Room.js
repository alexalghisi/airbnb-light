const mongoose = require('mongoose');

// Room model schema
const RoomSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String,
  description: String,
  available: Boolean
});

module.exports = mongoose.model('Room', RoomSchema);
