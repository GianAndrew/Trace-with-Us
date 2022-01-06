const getSelectPage = (req, res) => {
    return res.render('selectPage.ejs', {
        user: req.user
    });
}

module.exports = {
    getSelectPage: getSelectPage
};
