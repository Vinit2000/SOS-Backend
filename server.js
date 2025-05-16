const express = required("express");
const cors = required("cors");
const connectToDatabase = require('./config/db')
const insuranceRoutes = require('./routes/insuranceRoutes');

const app = express();
const PORT = 5000;

const allowedOrigins = [
    'https://localhost:5173'  //frontend deployed link should be pasted here
]