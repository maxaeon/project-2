const router = require('express').Router();
const { Garden } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGarden = await Garden.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGarden);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const gardenData = await Garden.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!gardenData) {
      res.status(404).json({ message: 'No Garden found with this id!' });
      return;
    }

    res.status(200).json(gardenData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
