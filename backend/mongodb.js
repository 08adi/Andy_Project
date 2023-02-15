const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://im_adi8:adithya1999@cluster0.snkwoh7.mongodb.net/test";

const client = new MongoClient(
  uri,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 },
  () => console.log("db connected")
);

const database = client.db("users");

exports.users = database.collection("user");