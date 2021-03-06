const express = require("express");
const passport = require("passport");
const healthFormController = require("../controllers/healthFormController");
const loginController = require('../controllers/loginController');
const registerController = require("../controllers/registerController");
const visitHistoryController = require('../controllers/visitHistoryController');
const personalInfoController = require('../controllers/personalInfoController')
const HomePageController = require('../controllers/HomePageController');
const authencation = require('../validator/authencation');
const adminController = require('../controllers/adminController');


const router = express.Router();

//---------------------------------- GET METHOD ----------------------------------

router.get('/', loginController.checkLoggedIn, healthFormController.getHealthFormPage);

router.get('/login', loginController.checkLoggedOut, loginController.getLoginPage)

router.get('/register', loginController.checkLoggedOut, registerController.getRegisterPage)

router.get('/visitHistory', loginController.checkLoggedIn, visitHistoryController.getVisitHistoryPage);

router.get('/personalInfo', loginController.checkLoggedIn, personalInfoController.getPersonalInfoPage);

router.get('/HomePage', loginController.checkLoggedIn, HomePageController.getHomePage);

router.get('/admin', adminController.getAdminPage);

router.get('/visitedPage', adminController.getAdminVisitedPage);

router.get('/userPage', adminController.getAdminUserPage);

router.get('/visitedDetails/:id', adminController.visitDetails);

router.get('/userDetails/:id', adminController.getUserDetailsPage);

router.get('/userEdit/:id', adminController.editUserPage);

//---------------------------------- POST METHOD ----------------------------------

router.post('/login', adminController.adminPage, passport.authenticate('local', {
    successRedirect: '/HomePage',
    failureRedirect: '/login',
    successFlash: true,
    failureFlash: true
}));

router.post('/register', authencation.validateRegister, registerController.createNewUser);

router.post('/healthForm', healthFormController.fillUpHealthForm);

router.post('/logOut', loginController.postLogOut);

router.post('/deleteVisit', adminController.deleteVisit);

router.post('/deleteUser', adminController.deleteUser);

router.post('/updateUser', adminController.updateUserById);



module.exports = router;