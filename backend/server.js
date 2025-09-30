require("dotenv").config();
const express = require('express')

const cors = require('cors');
const connectDB = require('./config/db')
const todoRoutes = require('./routes/todoRoutes')

const app = express()

connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes)

app.get('/', (req, res) => {
  res.json({ message: "Todo API is running..." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Example app listening on port ${PORT}`)})
