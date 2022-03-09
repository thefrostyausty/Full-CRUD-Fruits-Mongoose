// import our dependencies first
// allows us to load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
// import the fruits model when we have it
const Fruit = require('./models/fruit')

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
    console.log('this si fruit model', Fruit)
    res.send('the server is runner better go catch it')
})

app.get('/fruits/seed', (req, res) =>{
    // array of starter fruits
  const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
  ];
//   when we seed data there are a few steps involved 
// first step is to delete all the data that exist, only if data exists
Fruit.remove({})
  .then(data =>{
      console.log('this si what remove returns', data)
      Fruit.create(startFruits)
        .then(data => {
            console.log('this si what crate', data)
            res.send(data)
        })
  })
// then we create with our seed data
// then we can send if we want to see that data
})

// index route
app.get('/fruits', (req, res) => {
    // find the fruits
    Fruit.find({})
    // then render a template after found
        .then(fruits => {
            console.log(fruits)
            res.render('fruits/index', { fruits })
        })        
    // show an errro if there is one
        .catch(error => {
            console.log(error)
            res.json({error})
        })
})

// new route a GET route tthta renders the page wiht a form
app.get('/fruits/new', (req, res) =>{
    res.render('fruits/new')
})

// create route POST route that calls the dn and makes a new document

// show route
app.get('/fruits/:id', (req, res) => {
// we need to get the id
    const fruitID = req.params.id
// then we find the fruit by the id
    Fruit.findById(fruitID)
// once found we can render the view with data
        .then(fruit =>{
            res.render('fruits/show', { fruit })
        })
// if theres an error show that as well
        .catch(error  =>{
            console.log(error)
            res.json({ error })
        })
})

// server listener ..................
const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`app is lsitening on port: ${PORT}`)
})