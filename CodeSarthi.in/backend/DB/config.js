const mongoose = require('mongoose')
if(mongoose.connect('mongodb://localhost:27017/CodeSarthi')){
    console.log("Database Connect");
    
}