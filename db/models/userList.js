'use strict'
import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class UserList extends Model {
    static associate(models) {
      // define association here
      UserList.belongsTo(models.Role)
    }
  }
  UserList.init({
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    UserId: {
      primaryKey: true,
      type: DataTypes.UUID,
      references: { model: 'Users', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    ListId: {
      primaryKey: true,
      type: DataTypes.UUID,
      references: { model: 'Lists', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    RoleId: {
      primaryKey: true,
      type: DataTypes.UUID,
      references: { model: 'Roles', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'UserList',
  })
  return UserList
}