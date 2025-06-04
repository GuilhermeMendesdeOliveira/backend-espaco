import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './database/index.js';

import categoriaRouter from './routes/categoriaRouter.js';
import produtoRouter from './routes/produtoRouter.js';
import usuarioRouter from './routes/usuarioRouter.js';

dotenv.config();

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
        this.app.use('/categoria', categoriaRouter);
        this.app.use('/produto', produtoRouter);
        this.app.use('/usuario', usuarioRouter);
    }
}

export default new App().app;