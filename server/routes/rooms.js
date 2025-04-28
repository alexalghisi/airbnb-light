const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Route to get all rooms
router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

module.exports = router;
