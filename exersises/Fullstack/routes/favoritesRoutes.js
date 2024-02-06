const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite'); // Import  Favorite model

// POST route to add a favorite
router.post('/', async (req, res) => {
    try {
        const { articleId, title, description, url, imageUrl, publishedAt } = req.body;
        const newFavorite = new Favorite({ articleId, title, description, url, imageUrl, publishedAt });
        await newFavorite.save();
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const favorites = await Favorite.find({});
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// DELETE route to remove a favorite
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Favorite.findByIdAndDelete(id);
        res.status(200).json({ message: 'Favorite deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
