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

    async findAll(req, res){
        try {
            const categorias = await this.categoriaService.findAll();
            if (categorias.length > 0){
                res.status(200).json({
                    message: 'Categorias encontradas com sucesso!',
                    categorias
                });
            }
            else {
                res.status(404).json({
                    message: 'Nenhuma categoria encontrada!'
                });
            }
        }
        catch (error){
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inesperado!';

            const errorMap = {
                'Erro ao buscar as categorias':
                    {status: 400, message: 'Erro ao buscar as categorias'},
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