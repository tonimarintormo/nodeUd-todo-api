//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server. ');

  //deleteMany

  /*db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
    console.log(result);
  });*/


  //deleteOne

  /*db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
    console.log(result);
  });*/


  //findOneAndDelete
  /*db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    console.log(result);
  });*/

  //challenge
  /*db.collection('Users').deleteMany({name:'Antonio'}).then((result) => {
    console.log(result);c
  })*/

  db.collection('Users').findOneAndDelete({_id: new ObjectID("59ce948fcc2ccb761da5a262")}).then((result) => {
    console.log(result);
  });

  //db.close();
});
