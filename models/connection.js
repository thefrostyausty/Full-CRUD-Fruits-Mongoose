// import our dependencies first................
require('dotenv').config()
const mongoose = require('mongoose')


// database connection................
// setting up inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// establish connection..............
mongoose.connect(DATABASE_URL, CONFIG)

// events for when our connenction opens/close/errors
mongoose.connection
    .on('open', () => console.log('Connected to mongoose'))
    .on('close', () => console.log('DisConnected from mongoose'))
    .on('error', (error) => console.log(error))

// export our connection.....................
module.exports =  mongoose