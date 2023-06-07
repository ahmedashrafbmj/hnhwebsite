import Project from "../../Models/Project";
import connectDb from "../../Middelwares/Mogoose";

const handler = async (req, res) => {
  try {
    await connectDb(); // Assuming connectDb is a valid function that establishes a database connection

    let projects = await Project.find();
    res.status(200).json({ sucess: true,data:projects});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const corsMiddleware = cors();

export default function (req, res) {
  corsMiddleware(req, res, () => {
    connectDb(req, res, handler);
  });
}
