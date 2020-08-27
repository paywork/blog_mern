const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()


//데이터베이스 연결
require('./config/database')


//미들웨어
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



const port = 1111

app.listen(port, () => console.log(`server started at ${port}`))