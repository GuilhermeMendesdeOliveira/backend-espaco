import { createContainer, asClass } from 'awilix';

import CategoriaRepository from '../repositories/categoriaRepository.js';
import CategoriaService from '../services/categoriaService.js';
import CategoriaController from '../controllers/categoriaController.js';

import ProdutoRepository from '../repositories/produtoRepository.js';
import ProdutoService from '../services/produtoService.js';
import ProdutoController from '../controllers/produtoController.js';

import UsuarioRepository from '../repositories/usuarioRepository.js';
import UsuarioService from '../services/usuarioService.js';
import UsuarioController from '../controllers/usuarioController.js';

const container = createContainer();

container.register({
    categoriaRepository: asClass(CategoriaRepository).singleton(),
    categoriaService: asClass(CategoriaService).singleton(),
    categoriaController: asClass(CategoriaController).singleton(),
    produtoRepository: asClass(ProdutoRepository).singleton(),
    produtoService: asClass(ProdutoService).singleton(),
    produtoController: asClass(ProdutoController).singleton(),
    usuarioRepository: asClass(UsuarioRepository).singleton(),
    usuarioService: asClass(UsuarioService).singleton(),
    usuarioController: asClass(UsuarioController).singleton()
});

export default container;