const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/*var id = '59dd28709085f84ad974bc0b';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}*/

/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) =>{
  console.log('Todo: ', todo);
});*/

/*Todo.findById(id).then((todo) =>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by id: ', todo);
}).catch((e) => console.log(e));*/

User.findById('59de7700bc57911170d84c58').then((user) =>{
  if(!user){
    return console.log('Id not found');
  }

  console.log('user by id: ', user);
}, (e) => console.log(e));
