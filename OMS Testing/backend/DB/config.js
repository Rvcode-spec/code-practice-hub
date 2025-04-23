const mongoose = require('mongoose');
if(mongoose.connect('mongodb://localhost:27017/OMS')){
    console.log("mongoDB Connect");
    }
