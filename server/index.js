const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const mongoose = require('mongoose');

mongoose.connect();

const app = express();


// facebook auth
passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "http://www.example.com/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate(..., function(err, user) {
    if (err) { return done(err); }
    done(null, user);
  });
}
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/',
  failureRedirect: '/login' }));


  // app.get('/', (req, res) => {
//   res.json({message: "testing 123"})
// })

// dynamic port binding for heroku
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});