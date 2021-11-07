const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');
const plantsRoutes = require('./plantsRoutes')
const animalsRoutes = require('./animalsRoutes')
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// route.use('/animals',animalsRoutes)
// collect endpoints and prefix them
// router instance uses these prefixes
router.use('/garden', gardenRoutes);
router.use('/plants', plantsRoutes )
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/animals", animalsRoutes);

module.exports = router;
