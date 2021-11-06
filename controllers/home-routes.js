const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
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
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
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

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    // login doesn't need variables so no second argument to render()
    res.render("login");
  });

module.exports = router;
