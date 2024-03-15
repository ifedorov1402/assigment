const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite'); // Import  Favorite model
const authMiddleware = require('../middleware/auth');

// POST route to add a favorite

router.post('/', authMiddleware, async (req, res) => {
    try {
        const { articleId, title, description, url, imageUrl, publishedAt } = req.body;
        const userId = req.user._id; // Get user ID from the auth middleware
        const newFavorite = new Favorite({ 
          user: userId,
          articleId, title, description, url, imageUrl, publishedAt 
        });
        console.log('Creating new favorite for user ID:', userId);

        await newFavorite.save();
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




// router.post('/', async (req, res) => {
//     try {
//         const { articleId, title, description, url, imageUrl, publishedAt } = req.body;
//         const newFavorite = new Favorite({ articleId, title, description, url, imageUrl, publishedAt });
//         await newFavorite.save();
//         res.status(201).json(newFavorite);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// Fetching Users Favorites 


router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = req.user._id;
        const favorites = await Favorite.find({ user: userId });
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// router.get('/', async (req, res) => {
//     try {
//         const favorites = await Favorite.find({});
//         res.json(favorites);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// DELETE route to remove a favorite


router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        
        const favorite = await Favorite.findById(id);
        if (!favorite) {
            return res.status(404).json({ message: "Favorite not found" });
        }
        if (favorite.user.toString() !== userId) {
            return res.status(401).json({ message: "Not authorized" });
        }

        await Favorite.findByIdAndDelete(id);
        res.status(200).json({ message: 'Favorite deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});






// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Favorite.findByIdAndDelete(id);
//         res.status(200).json({ message: 'Favorite deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



module.exports = router;
