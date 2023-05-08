const mongoose = require('mongoose');

const connectDb = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connection SUCCESS by Morsailn");
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectDb;