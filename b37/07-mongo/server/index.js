const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 6660;
const URL_MONGO = "mongodb+srv://fer:cintaroja123@cluster0-2cnn6.mongodb.net/test?retryWrites=true&w=majority";

const movies = require('./controllers/movies.js');

app.use(express.json());
app.use('/movies', movies);

mongoose.connect(URL_MONGO,{ useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(!error){
        console.log('Connected to MongoDB');
    } else {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server initialized on PORT ${PORT}`);
});




