import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';



// Importa os modelos
import Produto from '../models/produtoModel.js';

dotenv.config();

const config = JSON.parse(
  fs.readFileSync(new URL('../config/config.json', import.meta.url), 'utf8')
);


const isTestEnv = process.env.NODE_ENV;
const { dialect, storage } = config[isTestEnv];
const models = [Produto];

console.log('isTestEnv:', isTestEnv);
console.log("🔗 Conectando ao banco de dados...");
let connection;
if (isTestEnv === 'test') {
  connection = new Sequelize({dialect, storage, logging: console.log});
} else {
  connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });
}


models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

// connection.sync();

export default connection;
