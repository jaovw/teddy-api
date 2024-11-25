'use strict';

const nome_tabela = 'usuario'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.createTable(nome_tabela, {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        deleted_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      }, { transaction: t });
    })

  },

  async down(queryInterface) {
    await queryInterface.dropTable(nome_tabela);
  },
};
