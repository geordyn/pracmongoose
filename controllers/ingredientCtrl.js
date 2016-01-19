var ingredientModel = require('./../models/ingredientModel');

module.exports = {
  create: function(req, res){
    var ingredient = new ingredientModel(req.body);
    //collection in database called ingredient
    ingredient.save(function(err,result){ //saves itself
      console.log('create');
      res.send(result);
    });
  },
  
  read: function(req, res){
    ingredientModel.find({}, function(err, result){
      console.log('read');
      res.send(result);
    });
  },

  update: function(req, res){
    var idToModify = ObjectId(req.params.id);
    var updateObject = {
      query: {_id: idToModify},
      update: {$set: ingredientModel(req.body)},
      new: false
    };
  },

  remove: function(req, res){
    var idToRemove = ObjectId(req.params.id);
  }
};
