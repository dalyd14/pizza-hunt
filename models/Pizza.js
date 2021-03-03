const { Schema, model } = require('mongoose');

const pizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAT: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
})

const Pizza = model('Pizza', pizzaSchema)

module.exports = Pizza