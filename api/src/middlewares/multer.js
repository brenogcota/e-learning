const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/uploads/')
    },
    filename: function (req, file, cb) {
      const suffix = Date.now() + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + suffix)
    }
})
  
const upload = multer({ storage: storage })

module.exports = async (req, res, next) => {
    upload.single('file')(req, res, err => {
        if (err) return res.status(500).json({ payload: err });
        
        const image = {};
        image.id = req.file.filename;
        image.url = `/uploads/${image.id}`;
        return res.status(201).json({ image });
    });
}