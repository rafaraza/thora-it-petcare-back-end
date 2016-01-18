module.exports = function(app) {

  var petModel = app.models.pet;

  var action = {};

  action.save = function(pet){
    return petModel.create(pet);
  };

  action.update = function(pet){
    return petModel.update({_id: pet._id}, pet, {upsert: true}).exec();
  };

  action.find = function(){
    return petModel.find().exec();
  };

  action.delete = function(id){
    return petModel.remove({_id: id}).exec();
  };

  action.deleteAll = function(){
    return petModel.remove().exec();
  };

  return action;

};
