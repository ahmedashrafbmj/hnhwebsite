import multer from 'multer';

const upload = multer({
  dest: './public/uploads/', // Set the destination directory where uploaded files will be stored
  limits: {
    fileSize: 1024 * 1024, // Set the maximum file size (in this example, it's 1MB)
  },
});

export default upload;
