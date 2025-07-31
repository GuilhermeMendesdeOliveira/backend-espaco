import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import './database/index.js';
import produtoRouter from './routes/produtoRouter.js';

dotenv.config();

// Necessário para __dirname funcionar com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }
    
    routes() {
        this.app.get('/', (req, res) => {
            res.send('✅ API RODANDO!');
        });
        this.app.use('/produto', produtoRouter);
        // ✅ Servir imagens da pasta uploads
        this.app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
    }
}

export default new App().app;
