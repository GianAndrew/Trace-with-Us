const { check } = require('express-validator');
const validateRegister = [
    check('firstname', 'Firstname is required').notEmpty(),
    check('lastname', 'Lastname is required').notEmpty(),
    check('middlename', 'Middlename is required').notEmpty(),
    check('sex', 'Gender is required').notEmpty(),
    check('age', 'Age is required').notEmpty(),
    check('birthday', 'Birthday is required').notEmpty(),
    check('contactNumber', 'Contact Number is required').notEmpty(),
    check('emailAddress', 'Invalid Email').notEmpty().trim(),
    check('password', 'Invalid Password. Password must be at least 5 characters long').notEmpty().isLength({ min: 5 }),
    check('lotNumber', 'Lot Number is required').notEmpty(),
    check('streetNumber', 'Street Number is required').notEmpty(),
    check('city', 'City is required').notEmpty(),
    check('province', 'Province is required').notEmpty(),
    check('zipCode', 'zip code is required').notEmpty(),
    check('vaccine', 'Vaccine is required').notEmpty()
]

module.exports = {
    validateRegister: validateRegister
};
