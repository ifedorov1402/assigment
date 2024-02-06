const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt}= require('express-jwt')



app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://fedorovivan:More140291@cluster0.8ajlsah.mongodb.net/moviedb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to the DB'))
.catch(err => console.error('Could not connect to the DB:', err));

app.use('/auth', require('./routes/userRouter.js')); // Authentication routes
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // JWT middleware
app.use('/api/issues', require('./routes/issueRouter.js')); // Issue routes
app.use('/api/comments', require('./routes/commentsRouter.js')); // Comments routes

// Error Handling Middleware

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})