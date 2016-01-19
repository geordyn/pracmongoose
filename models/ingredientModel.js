var mongoose = require('mongoose');

//schema object - Schema is a function. Schema is providing structure for data you're going
//to save in the database.
var ingredientSchema = mongoose.Schema({
    expirationDate: {type: 'Date'},
    amount: {type: 'Number'},
    name: {type: 'String'},
    cost: {type: 'Number'},
    vendor: {type: 'String'},
    qtyPerOrder: {type: 'Number'}

    
});
//make a model with this schema. push this model out
module.exports = mongoose.model('Ingredients', ingredientSchema);
//give collection name first, then pass schema name
