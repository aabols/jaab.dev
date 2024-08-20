'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Flashcard.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4
    },
    caption: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Flashcard',
    defaultScope: {
      attributes: ['id', 'caption']
    }
  })

  return Flashcard
}