// db.js
const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin@customer.lnx7pfc.mongodb.net/Customer?retryWrites=true&w=majority&appName=Customers'

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB successfully');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = mongoose;
