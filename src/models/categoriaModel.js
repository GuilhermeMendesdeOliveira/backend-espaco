import Sequelize, { Model } from "sequelize";

class CategoriaModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                categoria: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                ativo: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: true
                }
            },
            {
                sequelize,
                tableName: 'categorias',
                modelName: 'categoria',
                timestamps: true,
                underscored: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        )
    }
}

export default CategoriaModel;