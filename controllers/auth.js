const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

<<<<<<< HEAD
exports.getLogin = (req, res) => {
    if (req.user) {
      return res.redirect('/home')
    }
    res.render('login', {
      title: 'Login'
    })
}
  
exports.postLogin = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
=======

exports.postLogin = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.userID)) validationErrors.push({ msg: 'Please enter a valid userID.' })
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors)
<<<<<<< HEAD
      return res.redirect('/login')
=======
      return res.redirect('/')
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        req.flash('errors', info)
<<<<<<< HEAD
        return res.redirect('/login')
=======
        return res.redirect('/')
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
      }
      req.logIn(user, (err) => {
        if (err) { return next(err) }
        req.flash('success', { msg: 'Success! You are logged in.' })
<<<<<<< HEAD
        res.redirect(req.session.returnTo || '/home')
      })
    })(req, res, next)
  }
  
  exports.logout = (req, res) => {
    req.logout(() => {
      console.log('User has logged out.')
    })
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err)
      req.user = null
      res.redirect('/')
    })
  }
  
  exports.getSignup = (req, res) => {
    if (req.user) {
      return res.redirect('/home')
    }
    res.render('signup', {
      title: 'Create Account',
    })
  }
  
  exports.postSignup = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
=======
        res.redirect(req.session.returnTo || '/')
      })
    })(req, res, next)
  }

exports.postSignup = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.userID)) validationErrors.push({ msg: 'Please enter a valid userID address.' })
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors)
<<<<<<< HEAD
      return res.redirect('../signup')
=======
      return res.redirect('../')
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    const user = new User({
<<<<<<< HEAD
      userName: req.body.userName,
      email: req.body.email,
=======
      userID: req.body.userID,
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
      password: req.body.password
    })
  
    User.findOne({$or: [
<<<<<<< HEAD
      {email: req.body.email},
      {userName: req.body.userName}
=======
      
      {userID: req.body.userID}
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
    ]}, (err, existingUser) => {
      if (err) { return next(err) }
      if (existingUser) {
        req.flash('errors', { msg: 'Account with that email address or username already exists.' })
<<<<<<< HEAD
        return res.redirect('../signup')
=======
        return res.redirect('../')
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
      }
      user.save((err) => {
        if (err) { return next(err) }
        req.logIn(user, (err) => {
          if (err) {
            return next(err)
          }
<<<<<<< HEAD
          res.redirect('/home')
=======
          res.redirect('/')
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
        })
      })
    })
}
<<<<<<< HEAD
=======

>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
