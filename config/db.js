const mongoose = require('mongoose');
require("dotenv").config()

const  CONNECTION_STRING = process.env.MONGO_URI

<<<<<<< HEAD
/* Function to connect to MongoDB using Mongoose */
const connectToDatabase = async () => {
  try {
    // Connect to MongoDB using the provided connection string
    await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true, // Use new URL parser to avoid deprecation warnings
      useUnifiedTopology: true, // Use new Server Discovery and Monitoring engine
    //   useBigInt64: false,  // Explicitly disable useBigInt64 option to fix deserialization issue
    });
    console.log("Connected to database");
  } catch (error) {
    // Log and exit the process if connection fails
    console.log("Error connecting to database", error);
    process.exit(1); // Exit the application if DB connection fails
  }
};
=======
const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error in Connecting to Database", error);
        process.exit(1);
    }
}
>>>>>>> 81343147e952e427fa7195f3ba26b9065927eddd

module.exports = connectToDatabase