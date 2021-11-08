const sequelize = require('../config/connection');
const { User, Garden, Plant, Post, Animal, Comment, Calendar } = require('../models');

const userData = require('./userData.json');
const gardenData = require('./gardenData.json');
const plantData = require('./plantData.json');
const animalData = require('./animalData.json');
const postData = require('./postData.json')
const calendarData = require('./calendarData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED ----- \n')

  await User.bulkCreate(userData, {
    individualHooks: true, 
    returning: true
  })
  console.log('\n----- USERS SEEDED -----\n')

  await Garden.bulkCreate(gardenData)
  console.log('\n----- GARDENS SEEDED -----\n')
  
  await Plant.bulkCreate(plantData)
  console.log('\n----- PLANTS SEEDED -----\n')

  await Animal.bulkCreate(animalData)
  console.log('\n----- ANIMAL SEEDED -----\n')

  await Post.bulkCreate(postData)
  console.log('\n----- POST SEEDED -----\n')
  
  // await Calendar.bulkCreate(calendarData)
  // console.log('\n----- CALENDAR SEEDED -----\n')

  process.exit(0);
};

seedDatabase();
