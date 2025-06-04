import { Sequelize } from 'sequelize';
import fs from 'fs';

// Importa os modelos
import Categoria from '../models/categoriaModel.js';
import Produto from '../models/produtoModel.js';
import Usuario from '../models/usuarioModel.js';

// Carrega o arquivo de configuração
const config = JSON.parse(
  fs.readFileSync(new URL('../config/config.json', import.meta.url), 'utf8')
);

// Ambiente de execução
const env = process.env.NODE_ENV || 'development';
const { dialect, storage } = config[env];

// Cria a conexão Sequelize
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});

// Inicializa cada modelo com a instância do Sequelize
const models = [Categoria, Produto, Usuario];
models.forEach((model) => model.init(connection));

// Se houver associações, inicializa elas também
models.forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(connection.models);
  }
});

// Exporta a instância da conexão e os modelos (opcional, se quiser usar depois)
export { connection, models };
export default connection;
