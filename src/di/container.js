import { createContainer, asClass } from 'awilix';

import ProdutoRepository from '../repositories/produtoRepository.js';
import ProdutoService from '../services/produtoService.js';
import ProdutoController from '../controllers/produtoController.js';


const container = createContainer();

container.register({ 
    produtoRepository: asClass(ProdutoRepository).singleton(),
    produtoService: asClass(ProdutoService).singleton(),
    produtoController: asClass(ProdutoController).singleton(),
});

export default container;