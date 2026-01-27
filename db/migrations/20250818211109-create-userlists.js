'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserLists', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      UserId: {
        primaryKey: true,
        type: Sequelize.UUID,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      ListId: {
        primaryKey: true,
        type: Sequelize.UUID,
        references: { model: 'Lists', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      RoleId: {
        primaryKey: true,
        type: Sequelize.UUID,
        references: { model: 'Roles', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserLists')
  }
};
