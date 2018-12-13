'use strict'

const User = require('./models/User')

const signupHandler = (req, res)=> {
  User.findOne({email: req.param.email}, (err, val) => {
    if(val) {
      res.send('user already exists')
    } else {
      const newUser = new User({
        email: req.param.email
      })
    }
  })
}