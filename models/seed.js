///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Fruit = require("./fruit");

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection;

db.on('open', (req, res) =>{
    // array of starter fruits
  const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
  ];

// then we create with our seed data
// then we can send if we want to see that data
})

//   when we seed data there are a few steps involved 
// first step is to delete all the data that exist, only if data exists
Fruit.remove({})
  .then(deletedFruits =>{
      console.log('this si what remove returns', deletedFruits)
      Fruit.create(startFruits)
        .then(data => {
            console.log('here are the new seed fruits', data)
            db.close()
        })
        .catch(error =>{
            console.log(error)
            db.close()
        })
  })
  .catch(error =>{
      console.log(error)
      db.close()
  })