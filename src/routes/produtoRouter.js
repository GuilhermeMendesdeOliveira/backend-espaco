import { Router } from 'express';
import container from '../di/container.js';

const router = new Router();
const produtoController = container.resolve('produtoController');

router.get('/', (req, res) => res.status(200).json({ message: '✅ Rota Produto rodando com sucesso!' }));

router.post('/create', (req, res) => produtoController.create(req, res));

router.get('/findAll', (req, res) => produtoController.findAll(req, res));

router.get('/findById/:id', (req, res) => produtoController.findById(req, res));


export default router;