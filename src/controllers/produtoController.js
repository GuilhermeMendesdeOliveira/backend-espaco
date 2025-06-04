class ProdutoController {
    constructor({ produtoService }) {
        this.produtoService = produtoService;
    }

    async create(req, res) {
        try {
            const produto = req.body;

            // Método para validar se há dados no corpo da requisição


            // Método para criar o produto
            const result = await this.produtoService.create(produto);
            res.status(201).json({
                message: '✅ Produto criado com sucesso!',
                produto: result
            })
        }
        catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inespesrado!';

            const errorMap = {
                'Dados não informados':
                    { status: 400, message: '❌ Dados não informados!' },
                'Erro ao criar o produto':
                    { status: 500, message: '❌ Erro ao criar o produto!' },
                'Ocorreu um erro inesperado':
                    { status: 500, message: '❌ Ocorreu um erro inesperado!' },
            }

            const errorMapped = errorMap[errorMessage];
            res.status(errorMapped.status).json({
                message: errorMapped.message,
                error: errorMessage
            })
        }
    }
    async findAll(req, res) {
        try {
            const result = await this.produtoService.findAll();
            res.status(200).json({
                message: '✅ Todos os produtos encontrados com sucesso!',
                produtos: result
            })
        }
        catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inespesrado!';

            const errorMap = {
                'Erro ao buscar todos os produtos':
                    { status: 500, message: '❌ Erro ao buscar todos os produtos!' },
                'Ocorreu um erro inesperado':
                    { status: 500, message: '❌ Ocorreu um erro inesperado!' },
            }

            const errorMapped = errorMap[errorMessage];
            res.status(errorMapped.status).json({
                message: errorMapped.message,
                error: errorMessage
            })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            // Método para validar se há dados no parametro da requisição


            // Método para buscar o produto pelo ID
            const result = await this.produtoService.findById(id);
            res.status(200).json({
                message: '✅ Produto encontrado com sucesso!',
                produto: result
            })
        }
        catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inespesrado!';

            const errorMap = {
                'Erro ao buscar o produto por ID':
                    { status: 500, message: '❌ Erro ao buscar o produto por ID!' },
                'Ocorreu um erro inesperado':
                    { status: 500, message: '❌ Ocorreu um erro inesperado!' },
            }

            const errorMapped = errorMap[errorMessage];
            res.status(errorMapped.status).json({
                message: errorMapped.message,
                error: errorMessage
            })
        }        
    }
}

export default ProdutoController;