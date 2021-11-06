const router = require("express").Router();
const gardenRoutes = require('./gardenRoutes')
const userRoutes = require("./userRoutes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const calendarRoutes = require('./calendarRoutes')

// collect endpoints and prefix them
// router instance uses these prefixes
router.use('/gardens', gardenRoutes)
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use('/calendar', calendarRoutes)

module.exports = router;