const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    articleId: { type: String, required: true },
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    imageUrl: String,
    publishedAt: Date,
  });

module.exports = mongoose.model('Favorite', favoriteSchema);