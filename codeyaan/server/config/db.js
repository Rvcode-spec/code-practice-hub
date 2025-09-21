const mongodb = require('mongodb');
mongodb.MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  mongodb.MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log('Connected to MongoDB');
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

module.exports = {
  mongoConnect
};