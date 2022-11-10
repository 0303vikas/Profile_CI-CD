const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            minLength: 3
        },
        name: String,
        passwordhash: {
            type: String,
            required: [true, 'password is required'],
            minLength: 8 },
        created: {type: Date, default: new Date()},
        photos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        }]

    }
)

const User = mongoose.model('User', userSchema)

module.exports = User