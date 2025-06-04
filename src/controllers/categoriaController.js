class CategoriaController {
    constructor({categoriaService}){
        this.categoriaService = categoriaService;
    }

    async create(req, res){
        try {
            const categoria = req.body;
            // Método para validar se há dados no corpo da requisição
            this.categoriaService.validateData(categoria);
            // Criação da categoria
            const categoriaCriada = await this.categoriaService.create(categoria);
            res.status(201).json({
                message: 'Categoria criada com sucesso!',
                categoria: categoriaCriada
            });
        }
        catch (error){
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inesperado!';

            const errorMap = {
                'Dados não informados!':
                    {status: 400, message: 'Dados não informados no corpo da requisição'},
                'Erro ao criar a categoria':
                    {status: 400, message: 'Erro ao criar a categoria'},
                'Ocorreu um erro inesperado!':
                    {status: 500, message: 'Erro interno do servidor, tente novamente mais tarde'}
            };
            
            const errorMapped = errorMap[errorMessage];
            res.status(errorMapped.status).json({
                message: errorMapped.message
            });
        }
    }
}

export default CategoriaController;