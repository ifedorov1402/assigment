const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Route to get latest news
router.get('/latest', newsController.getLatestNews);

// Route to search news by keyword
router.get('/search', newsController.searchNews);


module.exports = router;
