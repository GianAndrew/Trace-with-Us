const healthFormService = require('../services/healthFormService');

const getHealthFormPage = (req, res) => {
    console.log(req.user);
    return res.render('health_form.ejs', {
        users: req.user
    });
}

const fillUpHealthForm = async (req, res) => {
    try {

        const userID = req.user.userID
        const { purpose, temp, qOne, qTwo, qThree, qFour, place, qFive, cause } = req.body

        healthFormService.createHealthForm(userID, purpose, temp, qOne, qTwo, qThree, qFour, place, qFive, cause);

        return res.redirect('/visitHistory')

    } catch (error) {
        console.log(error);
        return error
    }
}

module.exports = {
    getHealthFormPage: getHealthFormPage,
    fillUpHealthForm: fillUpHealthForm
};
