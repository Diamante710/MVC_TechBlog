const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./homePageRoutes');
const dashboardRoutes = require('../dashboardRoutes')

router.use('/api', apiRoutes);
router.use('/homePageRoutes', homePageRoutes)
router.use('/dashboard', dashboardRoutes)

module.exports = router;
