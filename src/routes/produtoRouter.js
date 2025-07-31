import { Router } from 'express';
import container from '../di/container.js';
import upload from '../config/multer.js';

const router = new Router();
const produtoController = container.resolve('produtoController');

router.get('/', (req, res) => res.status(200).json({ message: '✅ Rota Produto rodando com sucesso!' }));

router.post('/create', (req, res) => produtoController.create(req, res));

router.get('/findAll', (req, res) => produtoController.findAll(req, res));

router.get('/findAllByProdutiPai', (req, res) => produtoController.findAllByProdutiPai(req, res));

router.get('/findAllVariacoes/:id', (req, res) => produtoController.findAllVariacoes(req, res));

router.get('/findById/:id', (req, res) => produtoController.findById(req, res));

router.get('/getProdutosAPI', (req, res) => produtoController.getProdutosAPI(req, res));

router.put('/updateFoto/:id', upload.single('imagem'), (req, res) => produtoController.updateImg(req, res));

router.put('/changeAtivo/:id', (req, res) => produtoController.changeAtivo(req, res));



export default router;