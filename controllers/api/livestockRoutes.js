const router = require('express').Router();
const { Livestock, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// CREATE a Livestock Project
router.post('/', async (req, res) => {
  try {
    const newLivestock = await Livestock.create({
      ...req.body,
    })
    res.status(200).json(newLivestock);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all Livestocks
router.get('/', async (req, res) => {
  try {
    const livestockData = await Livestock.findAll({

      ...req.body,
    });
    res.status(200).json(livestockData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Livestock
router.get('/:id', async (req, res) => {
  try {
    const livestockData = await Livestock.findByPk(

      req.params.id, 
      {
        include: [
          {
            model:User,

          }
        ]
      }
    );
    if (!livestockData) {
      res.status(404).json({ message: 'Sorry about that, no records found for this user.' });

      return;
    }
    res.status(200).json(livestockData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Livestock
router.delete('/:id', async (req, res) => {
  try {
    const livestockData = await Livestock.destroy({
      where: {
        id: req.params.id,
      }
    });

    if (!livestockData) {
      res.status(404).json({ message: 'Sorry about that, no records found for this user.' });

      return;
    }

    res.status(200).json(livestockData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
