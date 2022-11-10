const bcrypt = require('bcrypt')
const userroutes = require('express').Router()
const User = require('../models/userCollection')

userroutes.post('/', async (req, res) => {
    const { username,name,password } = req.body
    const findusr = await User.findOne({ username })

    if(password.length < 3) return res.status(400).json({ error: 'Password should be atleast 3 character long' })
    else if(findusr) return res.status(400).json({ error: 'username must be unique' })


    const passwordhash = await bcrypt.hash(password, 10)

    const usr = new User({
        username,
        name,
        passwordhash
    })

    const saveusr = await usr.save()

    res.status(201).json(saveusr)
})

module.exports = userroutes