const GitHubStrategy = require('passport-github2').Strategy;

const User = require('../models/user.model');

const githubAuth = {
  clientID: '8b1f183544acce5bd5e6',
  clientSecret: 'd63c7c0a2aa6c700e6a7f8c95f75006c1dac9fad',
  callbackURL: 'http://localhost:3000/login/callback'
}


module.exports = function(passport) {

  passport.serializeUser((user,done) => {
    done(null, user);
  })

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  })

  passport.use(new GitHubStrategy(githubAuth, findOrCreateUser))

  function findOrCreateUser (accessToken, refreshToken, profile, done) {
    const query = { 'github.id': profile.id};
    const updates = {
      $setOnInsert: {
        'github:username': profile.username,
        'github.publicRepos':profile._json.public_repos
      }
    };
    const options = { upsert: true, new: true};

    return User.findOneAndUpdate(query, updates, options)
      .then((result) => {
        return done(null, result);
      })
      .catch((err) => {
        return done(err,null);
      });
  }
}
