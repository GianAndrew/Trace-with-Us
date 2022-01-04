const connection = require('../database/connection');
const bcryptjs = require('bcryptjs');

const createNewUser = (firstname, lastname, middlename, suffix, sex, age, birthday, contactNumber, emailAddress, password, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkEmail = await checkEmailUser(emailAddress);

            if (checkEmail) {
                reject(`This email ${email} has already exist. Please use other email`);
            }
            else {
                const salt = await bcryptjs.genSaltSync(10);

                const hashPass = await bcryptjs.hashSync(password, salt);

                connection.query(`INSERT INTO user_account (firstname, lastname, middlename, suffix, sex,age, birthday, contactNumber, email, password, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose) VALUES ('${firstname}','${lastname}','${middlename}','${suffix}','${sex}','${age}','${birthday}','${contactNumber}','${emailAddress}','${hashPass}','${lotNumber}','${streetNumber}','${city}','${province}','${zipCode}','${vaccine}','${firstDose}','${secondDose}')`, (err) => {
                    if (err) reject(err);
                    resolve('Create a new user successfully')
                });

            }
        } catch (error) {
            reject(error)
        }
    })
}

const checkEmailUser = (email) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM user_account WHERE email ='${email}'`, (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result.length > 0) {
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewUser: createNewUser
};
