const router = require('express').Router();
const { Plant } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE a Plant
router.post('/', withAuth, async (req, res) => {
  try {
    const newPlant = await Plant.create({
      ...req.body,
      user_id: req.session.user_id,
    })
    res.status(200).json(plantData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all Plants
router.get('/', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findAll({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Plant
router.get('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findByPk({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });
    if (!plantData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }
    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// DELETE a Plant
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });

    if (!plantData) {
      res.status(404).json({ message: 'No plants found with this id!' });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
