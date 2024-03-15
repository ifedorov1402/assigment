require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const newsRoutes = require('./routes/newsRoutes');
const favoriteRoutes = require('./routes/favoritesRoutes');
const userRoutes = require('./routes/userRouter'); // Include user routes
const authRouter = require('./routes/authRouter')

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(morgan('dev')); // Logging requests

// Routes
app.use('/api/news', newsRoutes); // Use news routes
app.use('/api/favorites', favoriteRoutes);
app.use('/api/users', authRouter); // Use user routes for registration, login, and profile management

// MongoDB Connection
mongoose.connect('mongodb+srv://fedorovivan:More140291@cluster0.8ajlsah.mongodb.net/news?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to the DB'))
.catch(err => console.error('Could not connect to the DB:', err));

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({errMsg: err.message});
});

// Server Listen
app.listen(9000, () => {
  console.log("The server is running");
});
