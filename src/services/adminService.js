const connection = require('../database/connection');

const getTotalUser = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query('SELECT COUNT(userID) AS totalUser FROM user_account', (err, result) => {
                if (err) throw err;

                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}
const getTotalVisit = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query('SELECT COUNT(formID) AS totalVisit FROM user_healthform', (err, result) => {
                if (err) throw err;
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query('SELECT * FROM user_account', (err, result) => {
                if (err) throw err;
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getAllVisit = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query('SELECT * FROM user_healthform ORDER BY timeCreated DESC', (err, result) => {
                if (err) throw err;
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const deleteVisitById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`DELETE FROM user_healthform WHERE formID = ${id}`, (err, result) => {
                if (err) throw err;
                resolve(result);
            })
        } catch (error) {
            reject(error)
        }
    })
}

const deleteUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`DELETE FROM user_account WHERE userID = ${id}`, (err, result) => {
                if (err) throw err;
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getTotalUser: getTotalUser,
    getTotalVisit: getTotalVisit,
    getAllUser: getAllUser,
    getAllVisit: getAllVisit,
    deleteVisitById: deleteVisitById,
    deleteUserById: deleteUserById
};
