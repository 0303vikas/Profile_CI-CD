const User = require('../models/userCollection')
const Gallery = require('../models/photoCollection')



const usersInDb = async () => {
    const users = await User.find({})
  
    return users.map(e => e.toJSON())
  
  }
const userImages = async () => {
    const images = await Gallery.find({})

    return images.map(image => image.toJSON())
}

module.exports = {
    usersInDb,
    userImages    
} 