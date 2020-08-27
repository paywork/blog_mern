const express = require('express')
const router = express.Router()
const userModel = require('../models/user')

// 회원가입 API
// @route POSt http://localhost:1111/user/signup
// @desc Register account
// @access Public
router.post('/signup', (req, res) => {
      const newUser = new userModel({
        name:  req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      newUser
          .save()
          .then(user => {
              res.json({
                  message: "registered user",
                  userInfo: user
              })
          })
          .catch(err => {
              res.json({
                  message: err.message
              })
          })
})



// 로그인 API
// @route POSt http://localhost:1111/user/login
// @desc Login account / return token
// @access Public
router.post('/login', (req, res) => {

})















module.exports = router