class ProdutoService {
    constructor({ produtoRepository }) {
        this.produtoRepository = produtoRepository;
    }

    async create(produto){
        try {
            const result = await this.produtoRepository.create(produto);
            return result;
        }
        catch (error){
            console.log(error);
            throw new Error('Erro ao criar o produto!');
        }
    }

    async findAll(){
        try {
            const result = await this.produtoRepository.findAll();
            return result;
        }
        catch (error){
            console.log(error);
            throw new Error('Erro ao buscar todos os produtos!');
        }
    }

    async findById(id){
        try {
            const result = await this.produtoRepository.findById(id);
            return result;
        }
        catch( error ){
            console.log(error);
            throw new Error('Erro ao buscar o produto por ID!');
        }
    }
}

export default ProdutoService;