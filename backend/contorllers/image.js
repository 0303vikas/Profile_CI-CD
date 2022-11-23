const imageRouter = require('express').Router()
const multer = require('multer')
const User = require('../models/userCollection')
const Gallery = require('../models/photoCollection')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname)
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    
    }

})

const userExtractor = (req,res,next) => {

  
    const authorization = req.get('authorization')

    if (!authorization) return res.status(401).send({ error: 'token not present'})

    let token = null
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        token = authorization.substring(7) }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) return res.status(400).send(err.message)
        else{
            req.user = decoded
        } 
    })
    next()
    
   
}

const upload = multer({ storage: storage})

imageRouter.get('/', async (req,res) => {
    try{
        const files = await Gallery.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(200).send(error.message)
    }

})


imageRouter.post('/', [userExtractor,upload.array('files')], async (req,res) => {
    try{
        const user = await User.findById(req.user.id)


        let fileArray = []
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimitype,
            }
            fileArray.push(file)
        })
        const multipleFiles = new Gallery({
            title: 'Gallery',
            files: fileArray,
            user: user.id

        })

        await multipleFiles.save()
        res.status(201).send('Files Uploded Successfully')

    } catch (error) {
        res.status(400).send(error.message)
    }
    

    // console.log('\n\nhello\n\n',req.body)
    // res.status(200).send('done')

})

module.exports = imageRouter