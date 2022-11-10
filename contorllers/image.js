const imageRouter = require('express').Router()
const multer = require('multer')

const upload = multer({ dest: '../public/data/uploads/'})

// const cpUpload = upload.fields([{name: 'largeGallery', maxCount: 4},{ name: 'smallGallery',maxCount: 4}])
imageRouter.post('/', upload.array('photos',12), (req,res) => {

    console.log('hello',req.body)
    res.status(200).send('done')

})

module.exports = imageRouter