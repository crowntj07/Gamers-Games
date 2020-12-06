const express = require('express')

const app = express();

//Middleware
app.use('/posts', () => {
    console.log('Middleware is running');


});




//Routes
app.get('/', (req,res) => {
    res.send('We are LIVE');

});

app.get('/posts', (req,res) => {
    res.send('We are LIVE');

});




//Port
app.listen(2000);
