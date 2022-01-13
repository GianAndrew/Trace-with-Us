const adminService = require('../services/adminService');

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

        return res.render('adminDashboard.ejs', {
            totalVisit: getTotalVisit[0].totalVisit,
            totalUser: getTotalUser[0].totalUser
        });

    } catch (error) {
        console.log(error);
    }
}
const getAdminVisitedPage = async (req, res) => {

    try {

        const getTotalVisit = await adminService.getTotalVisit();
        const getTotalUser = await adminService.getTotalUser();

        const getAllVisit = await adminService.getAllVisit();

        return res.render('visitedPage.ejs', {
            totalVisit: getTotalVisit[0].totalVisit,
            totalUser: getTotalUser[0].totalUser,
            AllVisit: getAllVisit
        })

    } catch (error) {
        console.log(error);
    }
}


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

module.exports = {
    adminPage: adminPage,
    getAdminPage: getAdminPage,
    getAdminVisitedPage: getAdminVisitedPage,
    getAdminUserPage: getAdminUserPage,
    deleteVisit: deleteVisit,
    deleteUser: deleteUser
};
