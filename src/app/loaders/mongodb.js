const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://acsodre:userroot@cluster0.umlwv6l.mongodb.net/test')
}

module.exports = startDB;