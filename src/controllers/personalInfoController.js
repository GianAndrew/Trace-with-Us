const getPersonalInfoPage = (req, res) => {
    return res.render('personalInfo.ejs', {
        user: req.user
    });
}

module.exports = {
    getPersonalInfoPage: getPersonalInfoPage
};
