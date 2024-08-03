// server.js
const express = require('express');
const cors = require('cors');
const customerRouter = require('./customer.controller');
require('./db');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', customerRouter);

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});