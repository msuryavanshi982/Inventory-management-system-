const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://pst:pst123%40@cluster0.lgg8c.mongodb.net/IMS";

const connectToMongo = async () => {
  try {
       mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
