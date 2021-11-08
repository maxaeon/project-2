const router = require("express").Router();
const { Plant, User, Garden } = require("../../models");
// const withAuth = require('../../utils/auth');

// CREATE a Plant
router.post("/", async (req, res) => {
  try {
    const newPlant = await Plant.create({
      ...req.body,
    });
    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all Plants
router.get("/", async (req, res) => {
  try {
    const plantsData = await Plant.findAll();
    res.status(200).json(plantsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single Plant
router.get("/:id", async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: Garden,
        },
      ],
    });
    if (!plantData) {
      res
        .status(404)
        .json({ message: "Sorry about that, no records found for this user." });
      return;
    }
    res.status(200).json(plantData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a Plant
router.delete("/:id", async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!plantData) {
      res
        .status(404)
        .json({ message: "Sorry about that, no records found for this User" });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
