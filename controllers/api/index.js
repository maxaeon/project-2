const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// collect endpoints and prefix them
// router instance uses these prefixes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;