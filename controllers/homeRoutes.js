const router = require("express").Router();
const { Garden, User, Plant, Post, Comment } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const gardenData = await Garden.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const garden = gardenData.map((garden) => garden.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("dashboard", {
      garden,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/garden/:id", async (req, res) => {
  try {
    const gardenData = await Garden.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const garden = gardenData.get({ plain: true });

    res.render("garden", {
      ...garden,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/plant/:id", async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const plant = plantData.get({ plain: true });

    res.render("plant", {
      ...plant,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", async (req, res) => {
  res.render("calendar");
});


router.get("/animal/:id", async (req, res) => {
  try {
    const gardenData = await Garden.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const animal = animalData.get({ plain: true });

    res.render("animal", {
      ...animal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Garden }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("signup");
});

// get all posts for resources page
router.get("/resources", (req, res) => {
  console.log("======================");
  Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // pass single post obj into homepage template
      // because we're using template engine, use res.render()
      // specify which template we want to use (homepage.handlebars), .handlebars ext implied
      //   loop over and map each Sequelize obj into serialized version, saving results in a new posts array
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      //   serialize obj down to properties you need with get()
      // this is what res.json() does automatically
      //   .render() can accept array or obj
      res.render("resources", { 
        posts, 
        loggedIn: req.session.loggedIn 
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //   serialize data
      const post = dbPostData.get({ plain: true });

      //   pass data to template with session variable
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router