const getLoginPage = (req, res) => {
    return res.render('login.ejs', {
        errors: req.flash('errors')
    });
}

const checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

const checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next()
}
const postLogOut = (req, res) => {
    req.session.destroy((err) => {
        return res.redirect('/login')
    })
}

module.exports = {
    getLoginPage: getLoginPage,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut
};
