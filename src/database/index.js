import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Importa os modelos
import Categoria from '../models/categoriaModel.js';
import Produto from '../models/produtoModel.js';
import Usuario from '../models/usuarioModel.js';

dotenv.config();

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const models = [Categoria, Produto, Usuario];

models.forEach((model) => model.init(connection));
models.forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(connection.models);
  }
});

connection.sync();

export default connection;
