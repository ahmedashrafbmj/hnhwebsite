import multer from 'multer';

const upload = multer({
  dest: './public/uploads/', // Set the destination directory where uploaded files will be stored
  limits: {
    fileSize: 1024 * 1024, // Set the maximum file size (in this example, it's 1MB)
  },
});


export default upload;
// import multer from 'multer';

// const upload = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/'); // Set the destination folder where uploaded files will be stored
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null,uniqueSuffix+file.originalname); // Set the filename for the uploaded file
//   }
// });

// export default upload;
