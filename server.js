const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()


const userRoute = require('./routes/user')
const profileRoute = require('./routes/profile')


//데이터베이스 연결
require('./config/database')


//미들웨어
app.use(morgan('dev'))
// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', userRoute)
app.use('/profile', profileRoute)

const port = 1111

app.listen(port, () => console.log(`server started at ${port}`))