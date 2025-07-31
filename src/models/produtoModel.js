import Sequelize, { Model } from "sequelize";

class ProdutoModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.BIGINT,
                    primaryKey: true,
                    allowNull: false
                },
                id_produto_pai: {
                    type: Sequelize.BIGINT,
                    allowNull: true,
                    defaultValue: null,
                    comment: 'ID do produto pai no Bling, se for um produto filho'
                },
                nome: {
                    type: Sequelize.STRING(255),
                    allowNull: false
                },
                codigo: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                preco: {
                    type: Sequelize.DECIMAL(10, 2),
                    allowNull: false,
                    defaultValue: 0.00
                },
                estoque: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                    defaultValue: 0
                },
                tipo: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                    defaultValue: 'P'
                },
                situacao: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                    defaultValue: 'A'
                },
                formato: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                descricao_curta: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    comment: 'Descrição curta do produto'
                },
                img_url: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    defaultValue: null,
                    comment: 'URL da imagem do produto'
                },
                ativo: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: true,
                    comment: 'Indica se o produto está ativo ou inativo'
                }
            },
            {
                sequelize,
                tableName: 'produtos',
                modelName: 'ProdutoModel',
                timestamps: false,
                underscored: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        )
    }
}

export default ProdutoModel;