const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ckrakshan11:ckrakshan12@cluster0.phd85.mongodb.net/').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});