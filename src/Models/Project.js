import mongoose from "mongoose";

const ProjecSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        // unique:true
        
    },
    Description:{
        type:String,
        required:[true,"Description is required"],
        // unique:true

    },
    StartDate:{
        type:String,
        required:[true,"StartDate is required"],

    },
    EndDate:{
        type:String,
        required:[true,"StartDate is required"],
    },
    image: {
        type: [String],  // Specify an array of strings to store multiple image paths
        required: [true, "At least one image is required"],
      },
      
   
})
export default  mongoose.model("projects",ProjecSchema);