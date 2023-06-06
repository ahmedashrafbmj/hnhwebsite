import mongoose from "mongoose";

const connectDb = async (req, res, handler) => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Connection already established");
      return handler(req, res);
    }
    mongoose.set('debug', true);
    mongoose.connect("mongodb+srv://admin:admin@cluster0.kmirv.mongodb.net/").then(()=>console.log('connected'))
    .catch(e=>console.log(e));;
    console.log("Connection successful");
    return handler(req, res);
  } catch (error) {
    console.log("Connection failed", error);
    // Handle the error appropriately
  }
};

export default connectDb;
