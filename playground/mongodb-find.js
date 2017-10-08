// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongo');

  // db.collection('ToDos').find({
  //     _id: new ObjectID('59da4a8e1549e6013502543e')
  //   }).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch to-dos', err);
  // });

  // db.collection('ToDos').find({name: phil}).count().then((count) => {
  //   console.log(`${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch to-dos', err);
  // });

  db.collection('users').find({name: 'phil'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
