const router = require("express").Router();
const { Animals, User } = require("../../models");
// const withAuth = require('../../utils/auth');

// CREATE a Animal
router.post("/", async (req, res) => {
  try {
    const newAnimals = await Animals.create({
      ...req.body,
    });
    res.status(200).json(newAnimals);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all Animals
router.get("/", async (req, res) => {
  try {
    const animalsData = await Animals.findAll();
    res.status(200).json(animalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single animal
router.get("/:id", async (req, res) => {
  try {
    const animalData = await Animals.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });
    if (!animalData) {
      res
        .status(404)
        .json({ message: "Sorry about that, no records found for this user." });
      return;
    }
    res.status(200).json(animalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Animal
router.delete("/:id", async (req, res) => {
  try {
    const animalData = await Animals.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!animalData) {
      res
        .status(404)
        .json({ message: "Sorry about that, no records found for this User" });
      return;
    }

    res.status(200).json(animalData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
