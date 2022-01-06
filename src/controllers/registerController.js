const { validationResult } = require('express-validator');
const registerService = require('../services/registerService');


const getRegisterPage = (req, res) => {
    return res.render('register.ejs');
}
const createNewUser = async (req, res) => {

    const errors = await validationResult(req);

    if (!errors.isEmpty()) {

        return res.render('register.ejs', { errors: errors.array() })
    }

    try {

        const { firstname, lastname, middlename, suffix, sex, age, birthday, contactNumber, emailAddress, password, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose } = req.body;

        await registerService.createNewUser(firstname, lastname, middlename, suffix, sex, age, birthday, contactNumber, emailAddress, password, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose);

        return res.redirect('/login');

    } catch (error) {

        return res.redirect('/register');
    }

}

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};
