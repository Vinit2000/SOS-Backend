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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });