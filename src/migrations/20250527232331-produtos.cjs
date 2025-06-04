'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', 
      { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        produto: {
          type: Sequelize.STRING,
          allowNull: false
        },
        descricao_curta: {
          type: Sequelize.STRING,
          allowNull: false
        },
        descricao_longa: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        id_categoria: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'categoria', key: 'id' }
        },
        preco: {
          type: Sequelize.DOUBLE,
          allowNull: false
        },
        imagem: {
          type: Sequelize.STRING,
          allowNull: true
        },
        imagem_2: {
          type: Sequelize.STRING,
          allowNull: true
        },
        imagem_3: {
          type: Sequelize.STRING,
          allowNull: true
        },
        quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        isNew: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        isFeatured: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        cores: {
          type: Sequelize.STRING,
          allowNull: true
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');

  }
};
