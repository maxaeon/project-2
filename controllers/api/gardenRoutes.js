const router = require("express").Router();
const { Garden, User } = require("../../models");
// const withAuth = require('../../utils/auth');

// CREATE a Garden
router.post("/", async (req, res) => {
  try {
    const newGarden = await Garden.create({
      ...req.body,
    });
    res.status(200).json(newGarden);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all Gardens
router.get("/", async (req, res) => {
  try {
    const gardensData = await Garden.findAll({
      ...req.body,
    });
    res.status(200).json(gardensData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Garden
router.get("/:id", async (req, res) => {
  try {
    const gardenData = await Garden.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });
    if (!gardenData) {
      res
        .status(404)
        .json({ message: "Sorry about that, no records found for this user." });

      return;
    }
    res.status(200).json(gardenData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Garden
router.delete("/:id", async (req, res) => {
  try {
    const gardenData = await Garden.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!gardenData) {
      res
        .status(404)
        .json({ message: "Sorry about that, no records found for this user." });

      return;
    }

    res.status(200).json(gardenData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
