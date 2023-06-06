import Project from "../../Models/Project";
import connectDb from "../../Middelwares/Mogoose";

const handler = async (req, res) => {
  try {
    await connectDb(); // Assuming connectDb is a valid function that establishes a database connection

    let projects = await Project.find();
    res.status(200).json({ name: "ahmed 1123"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default function(req, res) {
  connectDb(req, res, handler);
}