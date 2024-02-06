require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const morgan = require('morgan'); 
const newsRoutes = require('./routes/newsRoutes'); 
const favoriteRoutes = require('./routes/favoritesRoutes');


const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(morgan('dev')); // Logging requests



// Routes
app.use('/api/news', newsRoutes); // Use news routes
app.use('/api/favorites', favoriteRoutes);

mongoose.connect('mongodb+srv://fedorovivan:More140291@cluster0.8ajlsah.mongodb.net/fullstackdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to the DB'))
.catch(err => console.error('Could not connect to the DB:', err));



//Error handler

app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})

})
// 1: Port  2: Call back function (CB)
app.listen(9000, () =>{
    console.log ("  The server is runnug ")
})