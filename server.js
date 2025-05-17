const express = require("express");
const cors = require("cors");
const connectToDatabase = require('./config/db')
const insuranceRoutes = require('./routes/insuranceRoutes');

const app = express();
const PORT = 5000;

const allowedOrigins = [
    'https://localhost:5173'  //frontend deployed link should be pasted here
]

// DB connection
connectToDatabase();

app.use(express.json());
//connect to the mongoDb database

app.use('/', insuranceRoutes);
// Define a basic route for the home page

app.get('/', (req, res) => {
  res.send('Welcome to the API'); // Send a welcome message
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });