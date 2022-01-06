const { body } = require('express-validator');
const validateRegister = [
    body('firstname', 'Firstname is required').notEmpty(),
    body('lastname', 'Lastname is required').notEmpty(),
    body('middlename', 'Middlename is required').notEmpty(),
    body('sex', 'Gender is required').notEmpty(),
    body('birthday', 'Birthday is required').notEmpty(),
    body('contactNumber', 'Contact Number is required').notEmpty(),
    body('emailAddress', 'Invalid Email').isEmail(),
    body('password', 'Invalid Password. Password must be at least 5 characters long').notEmpty().isLength({ min: 5 }),
    body('lotNumber', 'Lot Number is required').notEmpty(),
    body('streetNumber', 'Street Number is required').notEmpty(),
    body('city', 'City is required').notEmpty(),
    body('province', 'Province is required').notEmpty(),
    body('zipCode', 'zip code is required').notEmpty(),
    body('vaccine', 'Vaccine is required').notEmpty()
]

module.exports = {
    validateRegister: validateRegister
};
