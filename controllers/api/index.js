const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');
const plantsRoutes = require('./plantsRoutes')


router.use('/users', userRoutes);
router.use('/garden', gardenRoutes);
router.use('/plants', plantsRoutes )


module.exports = router;
