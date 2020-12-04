module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    //Note created here
    res.send('Hello')
  })
}