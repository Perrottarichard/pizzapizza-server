const express = require('express')
const passport = require('passport')
const router = express.Router()


const CLIENT_HOME =
  //dev
  'http://localhost:3000'

//prod
// "https://pizzapizzadelivery.netlify.app"


//in app.js /auth/google

//google auth
router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }))

//google auth callback
router.get('/callback', passport.authenticate('google', { failureRedirect: '/login/failed', successRedirect: `${CLIENT_HOME}/dashboard` }))

module.exports = router