const express = require('express')

const app = express();
const mongoose = require('mongoose')

//Middleware
//app.use(auth);

//app.use('/posts', () => {
  //  console.log('Middleware is running');
//});




//Routes
app.get('/', (req,res) => {
    res.send('We are LIVE');

});

app.get('/posts', (req,res) => {
    res.send('We are LIVE');

});


//Connect to DB
mongoose.connect 



//Port
app.listen(2000);
