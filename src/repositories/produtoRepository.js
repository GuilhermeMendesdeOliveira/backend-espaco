import iProdutoRepository from '../interfaces/iProdutoRepository.js';
import ProdutoModel from '../models/produtoModel.js';

class ProdutoRepository extends iProdutoRepository {
    async create(produto) {
        const newProduto = await ProdutoModel.create(produto);
        return newProduto;
    }

    async createMany(produtos) {
        const newProdutos = await ProdutoModel.bulkCreate(produtos);
        return newProdutos;
    }

    async findAll() {
        const produtos = await ProdutoModel.findAll();
        return produtos;
    }

    async findById(id) {
        const produto = await ProdutoModel.findByPk(id);
        return produto;
    }

    async findAllByProdutiPai(){
        const id = null
        const produtos = await ProdutoModel.findAll({
            where: {
                id_produto_pai: id
            }
        });
        return produtos;
    }

    async findAllVariacoes(idProduto){
        const produtos = await ProdutoModel.findAll({
            where: {
                id_produto_pai: idProduto
            }
        });
        return produtos;
    }

    async updateImg(id, data){
        console.log("ID:", id);
        console.log("DATA:", data);
        const produto = await ProdutoModel.update(
            {img_url: data},
            {
                where: {
                    id: id
                }
            }
        )
        return produto;
    }

    async delete(id) {
        const produto = await ProdutoModel.destroy({
            where: {
                id: id
            }
        })
        return produto;
    }

    async changeAtivo(id, ativo){
        const produto = await ProdutoModel.update(
            {
                ativo: ativo
            },
            {
                where: {
                    id: id
                }
            }
        );
        return produto;
    }
}

export default ProdutoRepository;