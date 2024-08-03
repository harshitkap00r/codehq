// customer.controller.js
const express = require('express');
const Customer = require('./customer.model');

const router = express.Router();


router.get('/customers', async (req, res) => {
    console.log('Fetching all customers...');
    try {
        const customers = await Customer.find();
        res.send(customers);
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).send(err);
    }
});


router.post('/customers', async (req, res) => {
    console.log('Creating new customer...');
    const customer = new Customer(req.body);
    try {
        await customer.save();
        res.send(customer);
    } catch (err) {
        console.error('Error creating customer:', err);
        res.status(400).send(err);
    }
});

module.exports = router;