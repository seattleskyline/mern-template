const User = require('../database/schemas/User');
const TestItem = require('../database/schemas/TestItem');

module.exports = function(app){
  app.get('/api/testitems/create', ( req, res) => {

    const newItem = { name: "Portland Asshole", image_url: 'www.bing.com', price: 100}
    TestItem
      .create(newItem)
      .then( items => {
        res.send( items)
      })
      .catch( err => {
        res.send("Error Ocurred")
      })
  })

  app.get('/api/testitems', (req, res) => {
    TestItem
      .find()
      .then( items => {
        res.send( items)
      })
      .catch( err => {
        res.send("Error Ocurred")
      })
  })

  app.get('/api/users/create', (req, res) => {
    User.create({
      email: "fake email",
      firstName: "sam",
      lastName: "sennigsen"
    }).then( createdUser => {
      return res.send(createdUser)
    }).catch( err => {
      console.log(err)
      return res.send("AN error occured")
    })
  })

  app.get('/api/test', ( req, res) => {
    User
      .find()
      .then( users => {
        res.send( users )
      })
  })
}