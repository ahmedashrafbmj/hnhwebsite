import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../Models/AdminUser';
import connectDb from '../../Middelwares/Mogoose';
import formidable from 'formidable';
import cors from 'cors';


// ...



// // ...
export const config = {
    api: {
      bodyParser: false
    }
  }
  const handler = async (req, res) => {
    try {
      await connectDb();
  
      if (req.method === 'POST') {
        const form = new formidable.IncomingForm({
          // Formidable configuration
        });
  
        form.parse(req, async function (err, fields, files) {
          // Handle form parsing errors
          if (err) {
            res.status(400).json({ error: 'Login error' });
          } else {
            const { username, password, action } = fields;
  
            if (action === 'login') {
              // Perform login
              const user = await User.findOne({ username });
  
              if (!user) {
                res.status(401).json({ error: 'Invalid username or password' });
              } else {
                const passwordMatch = await bcrypt.compare(password, user.password);
  
                if (!passwordMatch) {
                  res.status(401).json({ error: 'Invalid username or password' });
                } else {
                  // Generate a JWT token for successful login
                  const token = jwt.sign({ username: user.username }, 'your-secret-key');
  
                  res.status(200).json({ message: 'Login successful', token });
                }
              }
            } else if (action === 'signup') {
              // Perform signup
              const existingUser = await User.findOne({ username });
  
              if (existingUser) {
                res.status(409).json({ error: 'Username is already taken' });
              } else {
                const hashedPassword = await bcrypt.hash(password, 10);
  
                const newUser = new User({
                  username,
                  password: hashedPassword,
                });
  
                await newUser.save();
  
                res.status(201).json({ message: 'User created successfully' });
              }
            } else {
              res.status(400).json({ error: 'Invalid action' });
            }
          }
        });
      } else {
        res.status(400).json({ error: 'Invalid request method' });
      }
    } catch (err) {
      console.log(err, 'err');
      res.status(400).json({ error: 'Validation error', details: err });
    }
  };


  const corsMiddleware = cors();

  export default function (req, res) {
    corsMiddleware(req, res, () => {
      connectDb(req, res, handler);
    });
  }
  


// const handler = async (req,res)=>{
//     // const { title, Description, StartDate, EndDate } = req.body;
//     try{
//         await connectDb()

//         if(req.method == "POST"){
          
//                 if(error){
//                     console.log(error,"multer errolr")
//                     res.status(400).json({error:"MULTER error",message:error})
//                 }
//                 else{
//                     let newpro = new User({username:req.body.username, password:req.body.password})
//                     await newpro.save()
//                     res.status(200).json({message:"successfully "})
//                     console.log("abcd")
//                     console.log(req.body)

//                 }
           

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
