const express = require("express");
const cors = require("cors");
const connectToDatabase = require('./config/db')
const insuranceRouter = require('./routes/insuranceRoutes');

const app = express();
const PORT = 5000;

const allowedOrigins = [
    'https://localhost:5173',  //frontend deployed link should be pasted here
    // 'frontendlink',
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

connectToDatabase();

app.use('/', insuranceRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});