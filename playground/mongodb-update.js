//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server. ');

  //findOneAndUpdate
  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59d279c9bc57911170d7e03c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })*/

  //challenge

/*  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59ce939a66ff3b75df080686')
  }, {
    $set: {
      name: 'Antonio'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59ce939a66ff3b75df080686')
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //db.close();
});
