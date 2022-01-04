const connection = require('../database/connection');
const bcrypt = require('bcryptjs');

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM user_account WHERE email = '${email}'`, (err, result) => {
                if (err) {
                    reject(err);
                }
                const users = result[0];
                resolve(users);
            })
        } catch (error) {
            reject(error)
        }
    })
}

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM user_account WHERE userID = '${id}'`, (err, result) => {
                if (err) {
                    reject(err);
                }
                const users = result[0];
                resolve(users)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const comparePasswordUser = (user, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) resolve(true);
            resolve(`The password that you've entered is incorrect`)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    findUserByEmail: findUserByEmail,
    findUserById: findUserById,
    comparePasswordUser: comparePasswordUser
};
