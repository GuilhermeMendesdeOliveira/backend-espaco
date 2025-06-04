class CategoriaService {
    constructor({ categoriaRepository }){
        this.categoriaRepository = categoriaRepository;
    }

    async create(categoria){
        try {
            return await this.categoriaRepository.create(categoria);
        }
        catch (error){
            console.error(error);
            throw new Error('Erro ao criar a categoria');
        }
    }

    validateData(data){
        if ( !data ){
            throw new Error('Dados não informados');
        }
    }
}

export default CategoriaService;