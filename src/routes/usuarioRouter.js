import { Router } from 'express';
import container from '../di/container.js';

const router = new Router();
const usuarioController = container.resolve('usuarioController');

router.get('/', (req, res) => res.status(200).json({ message: '✅ Rota Usuario rodando com sucesso!' }));

router.post('/create', (req, res) => usuarioController.create(req, res));

export default router;