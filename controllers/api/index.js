const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');
const plantsRoutes = require('./plantsRoutes')
const animalRoutes = require('./animalRoutes')
const livestockRoutes = require('./livestockRoutes')
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
// const calendarRoutes = require('./calendarRoutes')

// route.use('/animals',animalsRoutes)
// collect endpoints and prefix them
// router instance uses these prefixes

//  ./api/garden/gardenRoutes
router.use('/garden', gardenRoutes);
//  ./api/plants/plantsRoutes
router.use('/plants', plantsRoutes )
//  .api/users/userRoutes
router.use("/users", userRoutes);
//  .api/posts/postRoutes
router.use("/posts", postRoutes);
//  .api/comments/commentRoutes
router.use("/comments", commentRoutes);
//  .api/animals/animalsRoutes
router.use("/animal", animalRoutes);
//  .api/livestock/livestockRoutes
router.use("/livestock", livestockRoutes);

// router.use('/calendar', calendarRoutes)

module.exports = router;
