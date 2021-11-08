const router = require('express').Router();
const { Garden, User, Plant } = require('../models');
const withAuth = require('../utils/auth');
const getRandItem = require('../utils/getRandItem');

router.get('/', async (req, res) => {
  try {
    // Pass session flag into template
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/garden/:id', async (req, res) => {
  try {
    const gardenData = await Garden.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const garden = gardenData.get({ plain: true });

    res.render('garden', {
      ...garden,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plants/:id', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const plant = plantData.get({ plain: true });

    res.render('plant', {
      ...plant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Garden }],
    });
    const plantCount = await Plant.count()
    const plantDatum = await Plant.findByPk(Math.floor(Math.random() * plantCount))
    // console.log(allPlants)
    // const randPlant = getRandItem(allPlants.dataValues)
    const plant = plantDatum.get({ plain: true })
    console.log(plant)

    const user = userData.get({ plain: true });
    console.log(user)
    res.render('dashboard', {
      ...user,
      plant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

module.exports = router;
