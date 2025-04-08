const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    Company: String,
    Address: String,
    Material: String,
    QRT: Number,
    Reta: Number,
    adminId: String // 👈 VERY IMPORTANT
});

module.exports = mongoose.model('datas', DataSchema);
