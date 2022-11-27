const createError = require('http-errors')
const express = require('express')
const path = require('path')

require('express-async-errors')
// const path = require('path')
const cookieParser = require('cookie-parser')
// const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const loginrouter = require('./controllers/login')
const userroutes = require('./controllers/users')

const {
    requestLogger,
    unknownEndpoint,
    errorhandlingfunction,
}  = require('./utils/middleware')

const {
    infoHandler,
    errorHandler
} = require('./utils/logger')

const imageRouter  = require('./controllers/image')

require('dotenv').config()

const app = express()

if (process.env.NODE_ENV === 'test') {
    mongoose.connect(process.env.MONGODB_URL_TEST)
        .then(() => infoHandler('Connected to Mongodb'))
        .catch(error => errorHandler(`Error connecting to database ${error.message}`))


} else{
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => infoHandler('Connected to Mongodb'))
        .catch(error => errorHandler(`Error connecting to database ${error.message}`))

}


app.use(cors())
// app.use(express.static('build'))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))

// eslint-disable-next-line no-undef
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(cookieParser())
app.use(requestLogger)


app.use('/api/user', userroutes)
app.use('/api/login', loginrouter)
app.use('/api/images', imageRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})


app.use(unknownEndpoint)
app.use(errorhandlingfunction)




module.exports = app
