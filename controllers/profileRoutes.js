const router = require("express").Router();
const { Post, User, Plant, Garden } = require("../models");
const withAuth = require("../utils/auth");

// GET route for main page
// Use withAuth middleware to prevent access to route
router.get("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Garden }],
    });

    const plantCount = await Plant.count()
    const plantDatum = await Plant.findByPk(Math.floor(Math.random() * plantCount + 1))
    const postCount = await Post.count()
    const postDatum = await Post.findByPk(Math.floor(Math.random() * postCount + 1), {
      include: [{ model: User }]
    })
    // const posts = Post.findAll()
    // const resources = posts.map((resource) => resource.get({ plain: true }));
    // console.log(resources)
    const post = await postDatum.get({ plain: true })
    console.log(post)
    const plant = await plantDatum.get({ plain: true })
    console.log(plant)
    const user = await userData.get({ plain: true });
    console.log(user)

    res.render("dashboard", {
      ...user,
      ...post,
      plant,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
