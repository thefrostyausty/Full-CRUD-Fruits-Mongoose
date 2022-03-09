// import our dependencies...............
const { mongo } = require('./connection')
const mongoose = require('./connection')

// define our fruits model...................
// pull the schema and model constructors from mongoos
// we're going to use something called destructuring to accomplish this
const { Schema, model } = mongoose


// make our fruits schema
const fruitsSchema = new Schema({
    name: {type: String},
    color: {type: String},
    readyToEat: {type: Boolean}

}, {timestamps: true})

// make our fruit model
const Fruit = model('Fruit', fruitsSchema)

// export our model...................
module.exports = Fruit
