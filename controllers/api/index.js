<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');
const plantsRoutes = require('./plantsRoutes')
// const animalsRoutes = require('./animalsRoutes')
=======
const router = require("express").Router();
>>>>>>> main

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

<<<<<<< HEAD
router.use('/users', userRoutes);
router.use('/garden', gardenRoutes);
router.use('/plants', plantsRoutes )
// route.use('/animals',animalsRoutes)

module.exports = router;
=======
// collect endpoints and prefix them
// router instance uses these prefixes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
>>>>>>> main
