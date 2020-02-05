const express = require('express');
const mongoose = require('mongoose');

const movies = require('./controllers/movies.js');

const PORT = 6660;
const app = express();
const URL_MONGO = "mongodb+srv://fer:cintaroja123@cluster0-2cnn6.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(!error){
        console.log('Connected to MongoDB');
    } else {
        console.log(error);
    }
});

app.use('/movies', movies);


app.listen(PORT, () => {
    console.log(`Server initialized on PORT ${PORT}`);
});