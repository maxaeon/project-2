const router = require("express").Router();
const { Garden, User, Plant, Post, Comment } = require("../models");
const withAuth = require('../utils/auth');
const getRandItem = require('../utils/getRandItem');

router.get("/", async (req, res) => {
  try {
    // Pass session flag into template
    res.render('homepage', {
      loggedIn: req.session.loggedIn
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
        },
      ],
    });

    const garden = gardenData.get({ plain: true });

    res.render("garden", {
      ...garden,
      loggedIn: req.session.loggedIn,
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// withAuth() calls next() anonymous fx OR res.redirect("/login")
router.get("/add-post",  (req, res) => {
  console.log("======================");
  Post.findAll({
    where: {
      // use ID from session
      user_id: req.session.user_id,
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
      // serialize data before passing to template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // protect route from non logged in users
      res.render("add-post", { 
        posts, loggedIn: true 
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/calendar", async (req, res) => {
  res.render("calendar");
});


router.get("/edit-post/:id",(req, res) => {
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
      res.render("edit-post", { post, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }

  res.render("signup");
});

// get all posts for resources page
router.get("/resources", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
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
    
    const posts = dbPostData.map((post) => post.get({ plain: true })); 
    
    console.log(posts)


    res.render("resources", { 
      posts, 
      loggedIn: req.session.loggedIn 
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  
      // pass single post obj into homepage template
      // because we're using template engine, use res.render()
      // specify which template we want to use (homepage.handlebars), .handlebars ext implied
      //   loop over and map each Sequelize obj into serialized version, saving results in a new posts array
      
      //   serialize obj down to properties you need with get()
      // this is what res.json() does automatically
      //   .render() can accept array or obj

    
    
});


// get a single post
router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
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
    if (!dbPostData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    //   serialize data
    const post = dbPostData.get({ plain: true });

    //   pass data to template with session variable
    res.render("single-post", { 
      post, 
      loggedIn: req.session.loggedIn 
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


module.exports = router