const mongoose = require('mongoose')
require('dotenv').config()


const photoSchema = new mongoose.Schema({
    largePhotos: {
        // eslint-disable-next-line no-undef
        data: Buffer,
        contentType: String
    },
    smallPhotos: {
        // eslint-disable-next-line no-undef
        data: Buffer,
        contentType: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

photoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Gallery = mongoose.model('Gallery', photoSchema)

module.exports = Gallery