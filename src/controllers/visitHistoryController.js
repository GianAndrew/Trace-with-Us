const heathFormService = require('../services/healthFormService');

const getVisitHistoryPage = async (req, res) => {

    try {

        const result = await heathFormService.getDataHealthForm(req.user.userID);
        console.log(result);
        return res.render('visit_history.ejs', {
            user: req.user,
            data: result
        })

    } catch (error) {
        console.log(error);
    }

}
module.exports = {
    getVisitHistoryPage: getVisitHistoryPage
};
