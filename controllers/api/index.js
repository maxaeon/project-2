const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');
const plantsRoutes = require('./plantsRoutes')
// const animalsRoutes = require('./animalsRoutes')


router.use('/users', userRoutes);
router.use('/garden', gardenRoutes);
router.use('/plants', plantsRoutes )
// route.use('/animals',animalsRoutes)

module.exports = router;
