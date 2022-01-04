const getSelectPage = (req, res) => {
    return res.render('selectPage.ejs');
}

module.exports = {
    getSelectPage: getSelectPage
};
