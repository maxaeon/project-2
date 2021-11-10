const router = require("express").Router();
const { Post, User, Plant, Garden } = require("../models");
const withAuth = require("../utils/auth");

// GET route for main page
// Use withAuth middleware to prevent access to route
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Garden }],
    });
    // All the users posts
    const allPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
    // Plant of the Day
    const plantDatum = await Plant.findByPk(1)
    // Post of the Day
    const postDatum = await Post.findByPk(1, {
      include: [{ model: User }]
    })
    const userPosts = allPosts.map((resource) => resource.get({ plain: true }));
    console.log(userPosts)
    const post = await postDatum.get({ plain: true })
    const plant = await plantDatum.get({ plain: true })
    const user = await userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      ...post,
      userPosts,
      plant,
      loggedIn: req.session.loggedIn
    });
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});


module.exports = router;
