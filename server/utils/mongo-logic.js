const mongodb = require("mongodb");

const connectToDB = async function () {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://test:test123@cluster0.hmdtdoi.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  return client;
};

module.exports = {
  connectToDB,
};
