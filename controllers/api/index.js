const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');

router.use('/users', userRoutes);
router.use('/garden', gardenRoutes);

module.exports = router;
