const express = require('express');
const authMiddleware = require('../middleware/auth'); // Adjust the path as necessary
const User = require('../models/User'); 

const router = express.Router();

// Get profile information
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // Use the ID from the verified token
    const user = await User.findById(req.user.id).select('-password'); // Ensure this matches with how you set the user object in authMiddleware
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Update profile information
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { $set: { name, email } }, { new: true }).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});



module.exports = router;
