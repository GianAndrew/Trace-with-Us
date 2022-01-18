const passport = require('passport');
const passportLocal = require('passport-local');
const loginService = require('../services/loginService');

const LocalStrategy = passportLocal.Strategy;


const initPassportLocal = () => {

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
        try {
            const users = await loginService.findUserByEmail(email);
            if (!users) {
                return done(null, false, req.flash('errors', `This user email ${email} doesn't exist`));
            }
            if (users) {
                const match = await loginService.comparePasswordUser(users, password);
                if (match == true) {
                    return done(null, users, null);
                }
                else {
                    return done(null, false, req.flash('errors', match))
                }
            }
        } catch (error) {
            return done(null, false, error)
        }
    }));
}

passport.serializeUser((user, done) => {
    done(null, user.userID);
})

passport.deserializeUser((id, done) => {

    loginService.findUserById(id).then((user) => {
        return done(null, user);

    }).catch((error) => {
        return done(error, null)
    })
})

module.exports = initPassportLocal


