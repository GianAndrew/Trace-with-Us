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

const visitDetailsById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM user_healthform WHERE formID = ${id}`, (err, result) => {
                if (err) throw err;
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const userDetailsById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM user_account WHERE userID = ${id}`, (err, result) => {
                if (err) throw err;
                resolve(result);
            })
        } catch (error) {
            reject(error)
        }
    })
}

const editUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM user_account WHERE userID = ${id}`, (err, result) => {
                if (err) throw err;
                resolve(result);
            })
        } catch (error) {
            reject(error)
        }
    })
}

const updateUser = (userId, firstname, lastname, middlename, suffix, sex, age, birthday, contactNumber, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`UPDATE user_account SET firstname ='${firstname}', lastname ='${lastname}', middlename ='${middlename}', suffix ='${suffix}', sex ='${sex}', age ='${age}', birthday ='${birthday}', contactNumber ='${contactNumber}', lotNumber='${lotNumber}', streetNumber ='${streetNumber}',city ='${city}', province='${province}', zipCode='${zipCode}', vaccine='${vaccine}', firstDose='${firstDose}', secondDose='${secondDose}' WHERE userID = ${userId}`, (err, result) => {
                if (err) throw err;
                resolve(result)
            });
        } catch (error) {
            reject(error)
        }
    })
}

const getTotalFirstDose = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT COUNT(firstDose) AS totalFirstDose FROM user_account WHERE NOT firstDose  = ''`, (err, result) => {
                if (err) throw err;
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}
const getTotalSecondDose = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT COUNT(secondDose) AS totalSecondDose FROM user_account WHERE NOT secondDose  = ''`, (err, result) => {
                if (err) throw err;
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getTotalUser: getTotalUser,
    getTotalVisit: getTotalVisit,
    getAllUser: getAllUser,
    getAllVisit: getAllVisit,
    deleteVisitById: deleteVisitById,
    deleteUserById: deleteUserById,
    visitDetailsById: visitDetailsById,
    userDetailsById: userDetailsById,
    editUserById: editUserById,
    updateUser: updateUser,
    getTotalFirstDose: getTotalFirstDose,
    getTotalSecondDose: getTotalSecondDose
};
