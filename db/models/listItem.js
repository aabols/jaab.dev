'use strict'
import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class ListItem extends Model {
    static associate(models) {
      // define association here
      ListItem.belongsTo(models.List)
    }
  }
  ListItem.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ListItem',
  })
  return ListItem
}