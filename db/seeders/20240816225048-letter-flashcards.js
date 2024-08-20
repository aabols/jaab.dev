'use strict'
const { v4: uuidv4 } = require('uuid')

const letters = ['A', 'Ā', 'B', 'C', 'Č', 'D', 'E', 'Ē', 'F', 'G', 'Ģ', 'H', 'I', 'Ī', 'J', 'K', 'Ķ', 'L', 'Ļ', 'M', 'N', 'Ņ', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ū', 'V', 'Z', 'Ž']
const now = new Date("2024-08-16T22:50:48+00:00")
const cards = letters.map(letter => ({
  caption: letter,
  id: uuidv4(),
  createdAt: now,
  updatedAt: now
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Flashcards',
      cards
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Flashcards',
      { createdAt: now }
    )
  }
}
