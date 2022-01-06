require('dotenv').config()
const express = require('express');
const router = require('./routes/routes');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const initPassportLocal = require('./controllers/passportController');
const app = express();

initPassportLocal()
app.use(express.static(path.join('src', 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join('src', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret-key'))
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', router);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`SERVER STARTED : http://localhost:${process.env.SERVER_PORT}`);
})