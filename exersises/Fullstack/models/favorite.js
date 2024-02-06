const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    articleId: String, 
    title: String,
    description: String,
    url: String,
    imageUrl: String,
    publishedAt: Date,
   
});

module.exports = mongoose.model('Favorite', favoriteSchema);