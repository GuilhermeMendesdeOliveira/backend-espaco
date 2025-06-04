import Sequelize, { Model } from "sequelize";

class ProdutoModel extends Model {
    static associate(models) {
        ProdutoModel.belongsTo(models.categoria, { foreignKey: 'id_categoria' });
    }

    static init(sequelize) {
        super.init(
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
                    type: Sequelize.DECIMAL(10, 2),
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
                }
            },
            {
                sequelize,
                tableName: 'produtos',
                modelName: 'produto',
                timestamps: true,
                underscored: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        )
    }
}

export default ProdutoModel;