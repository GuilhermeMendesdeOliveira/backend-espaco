import { Router } from 'express';
import container from '../di/container.js';

const router = new Router();
const categoriaController = container.resolve('categoriaController');

router.get('/', (req, res) => res.status(200).json({ message: '✅ Rota Categoria rodando com sucesso!' }));

router.get('/all', (req, res) => categoriaController.findAll(req, res));

router.post('/create', (req, res) => categoriaController.create(req, res));




export default router;