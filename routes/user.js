const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const userModel = require('../models/user')

// 회원가입 API
// @route POSt http://localhost:1111/user/signup
// @desc Register account
// @access Public
router.post('/signup', (req, res) => {

     // 이메일 유무 체크
    userModel
        .findOne({email: req.body.email})
        .then(user => {
            if(user) {
                //이메일 있으면
                return res.json({
                    message: "email exists"
                })
            } else{
                //이메일 없으면
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        return res.json({
                            err: err.message
                        })
                    } else {
                        const newUser = new userModel({
                            name:  req.body.name,
                            email: req.body.email,
                            password: hash
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
                    }
                })
            }

        })
        .catch(err => {
            res.json({
                err: err.message
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