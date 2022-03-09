// import our dependencies first
// allows us to load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
// import the fruits model when we have it


// create our express application object
const app = require('liquid-express-views')(express())

// middleware.........................
// this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
// parses urlendcoded request bodies
app.use(express.urlencoded({extended: false}))
// to serve files from public statically 
app.use(express.static('public'))

// where the routes are......................
app.get('/', (req, res) =>{
    res.send('the server is runner better go catch it')
})




// server listener ..................
const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`app is lsitening on port: ${PORT}`)
})