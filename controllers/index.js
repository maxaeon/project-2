const router = require("express").Router();
const withAuth = require("../utils/auth");
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const profileRoutes = require('./profileRoutes')

// collect packaged group of API endpoints and prefix with /api
router.use("/", homeRoutes);
router.use("/profile", withAuth, profileRoutes);
router.use("/api", apiRoutes);


module.exports = router;
