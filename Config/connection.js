const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connection succesfull`.bgGreen.white)
    } catch (error) {
        console.log(`Connection Error : ${error}`.bgRed.white);
    }
}

module.exports = connectDB