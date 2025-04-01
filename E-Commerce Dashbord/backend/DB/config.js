const mongoose = require('mongoose')
if(mongoose.connect('mongodb://localhost:27017/ECD')){
    console.log("mongoDB Connect");
    }
