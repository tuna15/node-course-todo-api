// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongo');

  // db.collection('ToDos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('users').insertOne({
  //   name: 'phil',
  //   age: 32,
  //   location: 'bham'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('i do not like errors', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });


  db.close();
});
