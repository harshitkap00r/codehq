// customer.model.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  title: String,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;