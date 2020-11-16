
//creates and requires an express server

const express = require('express');
const app = express();


//route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//set port
const PORT = process.env.PORT || 3001;

//parse incoming data from strings or arrays
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());

//get the static webpage
app.use(express.static('public'));

//use apiRoutes to get the data

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listener for server

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});