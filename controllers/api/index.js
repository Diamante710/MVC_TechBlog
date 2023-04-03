
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes')

router.use('./commentRoutes', commentRoutes)
router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);

module.exports = router;
