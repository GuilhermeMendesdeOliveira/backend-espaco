import Sequelize, { Model } from "sequelize";

class UsuarioModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                nome: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                },
                senha: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                adm: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: true
                },
                ativo: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: true
                }
            },
            {
                sequelize,
                tableName: 'usuarios',
                modelName: 'usuario',
                timestamps: true,
                underscored: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        )
    }
}

export default UsuarioModel;