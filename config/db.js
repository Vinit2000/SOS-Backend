// backend/config/db.js or similar
const mongoose = require('mongoose');
require("dotenv").config();

const CONNECTION_STRING = process.env.MONGO_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error in Connecting to Database", error);
        process.exit(1);
    }
};

module.exports = connectToDatabase;
