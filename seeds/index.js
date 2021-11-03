const sequelize = require('../config/connection');
const { User, Garden } = require('../models');

const userData = require('./userData.json');
const gardenData = require('./gardenData.json');
const plantData = require('./plantData.json');
const animalData = require('./animalData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED ----- \n')

  await User

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
