import ProdutoModel from '../models/produtoModel.js';
import iProdutoRepository from '../interfaces/iProdutoRepository.js';

class ProdutoRepository extends iProdutoRepository {
    async create(produto){
        return await ProdutoModel.create(produto);
    }

    async findAll(){
        return await ProdutoModel.findAll();
    }

    async findById(id){
        return await ProdutoModel.findByPk(id);
    }
}

export default ProdutoRepository;