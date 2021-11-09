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

    // Plant of the Day
    const plantCount = await Plant.count()
    const plantDatum = await Plant.findByPk(Math.floor(Math.random() * plantCount + 1))
    // Post of the Day
    const postCount = await Post.count()
    const postDatum = await Post.findByPk(Math.floor(Math.random() * postCount + 1), {
      include: [{ model: User }]
    })

    // All the users posts
    const allPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
    const userPosts = allPosts.map((resource) => resource.get({ plain: true }));
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
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
