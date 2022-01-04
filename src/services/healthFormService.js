const connection = require('../database/connection');

const createHealthForm = (userID, purpose, temp, qOne, qTwo, qThree, qFour, place, qFive, cause) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`INSERT INTO user_healthform ( userID, purposeVisit, temperature, question_1, question_2, question_3, question_4, place, question_5, cause) VALUES ('${userID}','${purpose}','${temp}','${qOne}','${qTwo}','${qThree}','${qFour}','${place}','${qFive}','${cause}')`, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        } catch (error) {
            reject(error)
        }
    })
}

const getDataHealthForm = (userID) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT user_healthform.formID,user_healthform.purposeVisit,user_healthform.temperature,user_healthform.timeCreated, user_healthform.question_1,user_healthform.question_2,user_healthform.question_3,user_healthform.question_4,user_healthform.question_5,user_healthform.place, user_healthform.cause FROM user_healthform INNER JOIN user_account ON user_healthform.userID = user_account.userID WHERE user_healthform.userID = ${userID} ORDER BY user_healthform.timeCreated DESC;`, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createHealthForm: createHealthForm,
    getDataHealthForm: getDataHealthForm
};
