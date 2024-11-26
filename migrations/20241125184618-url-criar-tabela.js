'use strict';

const nome_tabela = 'url'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.createTable(nome_tabela, {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_usuario: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
            key: 'id'
          }
        },
        url_origem: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        url_reduzida: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        qtd_acesso: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "created_at",
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          field: "updated_at",
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          field: "deleted_at",
        },
      }, { transaction: t });
    })

  },

  async down(queryInterface) {
    await queryInterface.dropTable(nome_tabela);
  },
};
