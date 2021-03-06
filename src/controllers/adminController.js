const adminService = require('../services/adminService');
const { validationResult } = require('express-validator');

const adminPage = (req, res, next) => {

    const { email, password } = req.body;

    if (email === 'admin@gmail.com' && password === 'admin') {
        return res.redirect('/admin')
    }
    next();
}

const getAdminPage = async (req, res) => {

    try {

        const getTotalVisit = await adminService.getTotalVisit();
        const getTotalUser = await adminService.getTotalUser();

        const getTotalFirstDose = await adminService.getTotalFirstDose();
        const getTotalSecondDose = await adminService.getTotalSecondDose();

        const getAllVisit = await adminService.getAllVisit();

        return res.render('adminDashboard.ejs', {
            totalVisit: getTotalVisit[0].totalVisit,
            totalUser: getTotalUser[0].totalUser,
            AllVisit: getAllVisit,
            totalFirstDose: getTotalFirstDose[0].totalFirstDose,
            totalSecondDose: getTotalSecondDose[0].totalSecondDose
        });

    } catch (error) {
        console.log(error);
    }
}

//---------- VISIT -------------
const getAdminVisitedPage = async (req, res) => {

    try {

        const getTotalVisit = await adminService.getTotalVisit();
        const getTotalUser = await adminService.getTotalUser();

        const getAllVisit = await adminService.getAllVisit();

        return res.render('visitedPage.ejs', {
            totalVisit: getTotalVisit[0].totalVisit,
            totalUser: getTotalUser[0].totalUser,
            AllVisit: getAllVisit
        });

    } catch (error) {
        console.log(error);
    }
}

const visitDetails = async (req, res) => {

    const { id } = req.params
    const getTotalVisit = await adminService.getTotalVisit();
    const getTotalUser = await adminService.getTotalUser();
    const result = await adminService.visitDetailsById(id);

    try {

        return res.render('visitDetailPage.ejs', {
            totalVisit: getTotalVisit[0].totalVisit,
            totalUser: getTotalUser[0].totalUser,
            data: result[0]
        });

    } catch (error) {
        console.log(error);
    }
}

// Delete visit in admin page
const deleteVisit = async (req, res) => {
    const { deleteInput } = req.body;
    try {
        await adminService.deleteVisitById(deleteInput);
        return res.redirect('/visitedPage');
    } catch (error) {
        console.log(error);
    }
}

//-------------- USER -------------

const getAdminUserPage = async (req, res) => {

    try {

        const getTotalVisit = await adminService.getTotalVisit();
        const getTotalUser = await adminService.getTotalUser();

        const getAllUser = await adminService.getAllUser();

        return res.render('userPage.ejs', {
            totalVisit: getTotalVisit[0].totalVisit,
            totalUser: getTotalUser[0].totalUser,
            AllUser: getAllUser
        })
    } catch (error) {
        console.log(error);
    }
}


// Delete user in admin page
const deleteUser = async (req, res) => {
    const { deleteUser } = req.body;

    try {

        await adminService.deleteUserById(deleteUser);

        return res.redirect('/userPage')
    } catch (error) {
        console.log(error);
    }
}

const getUserDetailsPage = async (req, res) => {

    const { id } = req.params;

    try {

        const result = await adminService.userDetailsById(id);

        return res.render('userDetails.ejs', {
            user: result[0]
        });

    } catch (error) {
        console.log(error);
    }

}

const editUserPage = async (req, res) => {

    const { id } = req.params;

    try {

        const result = await adminService.editUserById(id);

        return res.render('userEdit.ejs', { user: result[0] });

    } catch (error) {
        console.log(error);
    }
}

const updateUserById = async (req, res) => {

    const userId = req.body.userId;
    const { firstname, lastname, middlename, suffix, sex, age, birthday, contactNumber, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose } = req.body;

    try {
        await adminService.updateUser(userId, firstname, lastname, middlename, suffix, sex, age, birthday, contactNumber, lotNumber, streetNumber, city, province, zipCode, vaccine, firstDose, secondDose);
        return res.redirect('/userPage');
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    adminPage: adminPage,
    getAdminPage: getAdminPage,
    getAdminVisitedPage: getAdminVisitedPage,
    getAdminUserPage: getAdminUserPage,
    deleteVisit: deleteVisit,
    deleteUser: deleteUser,
    visitDetails: visitDetails,
    getUserDetailsPage: getUserDetailsPage,
    editUserPage: editUserPage,
    updateUserById: updateUserById
};
