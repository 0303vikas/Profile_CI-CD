const supertest = require('supertest');
const app = require('../app');
const Gallery = require('../models/photoCollection')
const User = require('../models/userCollection')
const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcrypt')

const { usersInDb, userImages } = require('./helper.js')

const api = supertest(app)



describe('/api/image test', ()  => {
 
  var tokenExt
  beforeEach(async () => {

    //  delete many
    await Gallery.deleteMany({})
    
    // sign up user

    const userSignup = {
      username: 'dropi',
      name: 'dropi',
      password: 'dropidropi',
    }
    
  
    await api
      .post('/api/user')
      .send(userSignup)
      .expect('Content-Type', /application\/json/) 
      
      // login

      const userLogin = {
        username: 'dropi',
        password: 'dropidropi'
      }
    
      const loginuser = await api
      .post('/api/login')
      .send(userLogin)
      .expect('Content-Type', /application\/json/)
    
      tokenExt = loginuser.body.token  

      

  
  })

  

  test.only('image addition is possible', async() => {

    const imageBegin = await userImages()

    // upload images ()
    const images = path.resolve(__dirname, '../images/img.jpg')


    const apicall = await api
    .post('/api/images')
    .set('content-type', 'multipart/form-data')
    .set('Authorization', 'Bearer '+tokenExt)
    .attach('files',images)
    .attach('files',images)
    .attach('files',images)
    .attach('files',images)
    .attach('files',images)
    .attach('files',images)
    .attach('files',images)
    .attach('files',images)     

    console.log(apicall.body)

    const imageEnd = await userImages()

    expect(imageEnd[0].files).toHaveLength(imageBegin.length +8)
   
  })

  test('sending request without images', async() => {

    const imageBegin = await userImages()

    // upload images ()
    const images = path.resolve(__dirname, '../images/img.jpg')

    await api
    .post('/api/images')
    .set('content-type', 'multipart/form-data')
    .set('Authorization', 'Bearer '+tokenExt)       
    .expect(500)   
   
  })  
})

describe('User testing', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('dropidropi', 10)
    const user = new User({ username: 'dropi',name:'dropi', passwordhash: passwordHash })

    await user.save()
  })

  afterAll(() => {
    mongoose.connection.close()
  })

  test('new user with dulicate name gives error', async () => {
      const usersAtStart = await usersInDb()
  
      const newUser = {
        username: 'dropi',
        name: 'dropi',
        password: 'hisidkokd'
      }
  
      const result = await api
        .post('/api/user')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
  
      expect(result.body.error).toContain('username must be unique')
    })

    test('creation succeeds with a fresh username', async () => {
      const usersAtStart = await usersInDb()
  
      const newUser = {
        username: 'Vikas',
        name: 'VikasSingh',
        password: 'hsisksidkd'
      }
  
      await api
        .post('/api/user')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /application\/json/)
  
  
      const userAtEnd = await usersInDb()
  
      expect(userAtEnd).toHaveLength(usersAtStart.length + 1)
  
      expect(userAtEnd.map(u => u.username)).toContain(newUser.username)
    })

    test('If length of username is less than 3, error 400 is displayed', async () => {
      const usersAtStart = await usersInDb()
  
      const newUser = {
        username: 'ro',
        name: 'root',
        password: 'hisidkokd'
      }
  
      const result = await api
        .post('/api/user')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
      expect(result.body.error).toContain('User validation failed: username: Path `username` (`ro`) is shorter than the minimum allowed length (3)')
  
      const userAtEnd = await usersInDb()
  
      expect(userAtEnd).toHaveLength(usersAtStart.length)
    })

    test('If length of password is less than 3, error 400 is displayed', async () => {
      const usersAtStart = await usersInDb()
  
      const newUser = {
        username: 'ro',
        name: 'root',
        password: 'hi'
      }
  
      const result = await api
        .post('/api/user')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
  
      expect(result.body.error).toContain('Password should be atleast 3 character long')
  
      const userAtEnd = await usersInDb()
  
      expect(userAtEnd).toHaveLength(usersAtStart.length)
    })



})


