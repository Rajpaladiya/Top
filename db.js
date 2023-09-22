const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/CRUD'



const MongoToConnect=()=>{
    mongoose.connect(mongoURI)
}

module.exports = MongoToConnect;