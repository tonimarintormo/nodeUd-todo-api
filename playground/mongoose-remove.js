const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
  console.log(result);
});*/

/*Todo.findOneAndRemove({_id:'59e2539f1411602860ed574e'}).then((todo) =>{
  console.log(todo);
});*/

Todo.findByIdAndRemove('59e2539a1411602860ed574d').then((todo) => {
  console.log(todo);
});
