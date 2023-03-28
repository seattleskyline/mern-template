module.exports = function(app){
  app.get('/api/test', ( req, res) => {
    return res.send('pickle')
  })
}