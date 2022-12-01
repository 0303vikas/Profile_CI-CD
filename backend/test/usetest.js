const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/userCollection')
const supertest = require('supertest')
const app = require('../app')

const { usersInDb } = require('./helper.js')


const api = supertest(app)

desdescribe('User testing', () => {
    beforeEach(async () => {
      await User.deleteMany({})
      const passwordHash = await bcrypt.hash('dropidropi', 10)
      const user = new User({ username: 'dropi',name:'dropi', passwordhash: passwordHash })
  
      await user.save()
    })

    test('new user with dulicate name gives error', async () => {
        const usersAtStart = await usersInDb()
    
        const newUser = {
          username: 'root',
          name: 'root',
          password: 'hisidkokd'
        }
    
        const result = await api
          .post('/api/user')
          .send(newUser)
          .expect(400)
          .expect('Content-Type', /application\/json/)
    
    
        expect(result.body.error).toContain('username must be unique')
      })



})