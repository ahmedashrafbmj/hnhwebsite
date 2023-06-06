// import Project from "../../Models/Project";
// import connectDb from "../../Middelwares/Mogoose";
// import upload from "../../Middelwares/upload";


// const handler = async (req,res)=>{
//     // const { title, Description, StartDate, EndDate } = req.body;
//     try{
//         await connectDb()

//         if(req.method == "POST"){
//             await upload.single("picture", 20)(req, res, async (error) => {
//                 if(error){
//                     console.log(error,"multer errolr")
//                     res.status(400).json({error:"MULTER error",message:error})
//                 }
//                 else{
//                     let newpro = new Project({title:req.body.title, Description:req.body.Description,StartDate:req.body.StartDate,EndDate:req.body.EndDate,image:req.file.path})
//                     await newpro.save()
//                     res.status(200).json({message:"successfully "})
//                     console.log("abcd")
//                     console.log(req.body)

//                 }
//             }
//             )

//         }
//         else{
//             res.status(400).json({error:"error"})
//         }

//     }
//     catch(err){
//         console.log(req.body)
//         console.log(err,"err")
//         res.status(400).json({ error: "Validation error", details: err });



//     }

// }
// export default function(req, res) {
//     connectDb(req, res, handler);
//   }



// // import Project from "../../Models/Project";
// // import connectDb from "../../Middelwares/Mogoose";
// // import upload from "../../Middelwares/upload";

// // const handler = async (req, res) => {
// //   try {
// //     await connectDb();

// //     if (req.method === "POST") {
// //       // Use the `upload` middleware to handle the file upload
// //       upload.array("files", 20)(req, res, async (error) => {
// //         if (req.files && req.files.length > 0) {
// //             const { title, Description, StartDate, EndDate } = req.body;
// //             let newpro = new Project({
// //               title,
// //               Description,
// //               StartDate,
// //               EndDate,
// //               imageUrls: req.files.map((file) => file.path), // Assuming you have a field called `imageUrls` in your Project model to store the file paths
// //             });
// //             await newpro.save();
// //         }

// //         // Access the uploaded files via `req.files`
// // else {
// //           // Handle the case when no files were uploaded
// //           console.log("error agaya ha")

// //         }

// //         return res.status(200).json({ message: "Successful" });
// //       });
// //     } else {
// //       res.status(400).json({ error: "Invalid request method" });
// //     }
// //   } catch (err) {
// //     console.log(err, "err");
// //     res.status(400).json({ error: "Validation error", details: err });
// //   }
// // };

// // export default function (req, res) {
// //   connectDb(req, res, handler);
// // }












import fs from 'fs';
import Project from "../../Models/Project";
import connectDb from "../../Middelwares/Mogoose";
import formidable from 'formidable';
import nextConnect from 'next-connect'
import { dirname } from 'path';
export const config = {
  api: {
    bodyParser: false
  }
}

// const saveFile = async (file) => {
//   console.log(file,"file func")
//   return new Promise((resolve, reject) => {
//     const filePath = `/uploads`; // Replace with the desired file path

//     const readStream = fs.createReadStream(file.path);
//     const writeStream = fs.createWriteStream(filePath);

//     readStream.on('error', (error) => {
//       reject(error);
//     });

//     writeStream.on('error', (error) => {
//       reject(error);
//     });

//     writeStream.on('finish', () => {
//       resolve(filePath);
//     });

//     readStream.pipe(writeStream);
//   });
// };

const handler = async (req, res) => {
  try {
    await connectDb();
    if (req.method === "POST") {
      const form = new formidable.IncomingForm({
        uploadDir: process.cwd() + "/public/uploads",
        filename: (a, b, c) => {
          return `${Math.random() * 100}${c.originalFilename}`
        },
        multiples:true
      });

      form.parse(req, async function (err, fields, files) {
        console.log(err)
        if (err) {
          res.status(400).json({ error: "File Upload error " });
        }
        else{
          if(files.image.length != 0 ){
            console.log(files,'files')
            let fileset;

            if (typeof files.image === 'object') {
              fileset = files.image.newFilename;
            } else {
              fileset = files?.image?.map(e => e.newFilename);
            }
                        console.log(fileset)
           let  data  = {...fields,image:fileset}
             let newpro = new Project(data)
             await newpro.save()
             res.status(200).json({ message: "successfully ",data:files })
           }
          }
          
      });

    } else {
      res.status(400).json({ error: "Invalid request method" });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(400).json({ error: "Validation error", details: err });
  }
};

const corsMiddleware = cors();

export default function (req, res) {
  corsMiddleware(req, res, () => {
    connectDb(req, res, handler);
  });
}

