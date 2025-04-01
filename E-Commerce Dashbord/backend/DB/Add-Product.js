const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    companyName:String
})

module.exports =mongoose.model('Add-Products',ProductSchema)