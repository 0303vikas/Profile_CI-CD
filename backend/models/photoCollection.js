const mongoose = require('mongoose')
require('dotenv').config()


const photoSchema = new mongoose.Schema({
    title: {
        // eslint-disable-next-line no-undef
        type: String,
        required: true
    },
    files: [Object],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

photoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Gallery = mongoose.model('Gallery', photoSchema)

module.exports = Gallery