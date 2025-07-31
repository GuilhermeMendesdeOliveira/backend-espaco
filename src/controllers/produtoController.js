import BlingAPI from '../services/BlingAPI.js';

class ProdutoController {
    constructor({ produtoService }) {
        this.produtoService = produtoService;
    }

    async getProdutosAPI(req, res) {
        try {
            const token = 'e26e1ee53a0efc4b7db77c8640f0aac8f316a9ae'; // Substitua pelo seu token válido

            const bling = new BlingAPI({ accessToken: token });
            const result = await bling.getProdutos();
            if (!result || result.length === 0) {
                return res.status(404).json({
                    message: '❌ Nenhum produto encontrado na API Bling!'
                });
            }
            const produtos = await this.produtoService.create(result);


            res.status(200).json({
                message: '✅ Produtos obtidos com sucesso da API Bling!',
                produtos: produtos
            });
        }
        catch (error) {
            console.error(error);
            // const errorMessage = error.message || 'Ocorreu um erro inespesrado!';

            // const errorMap = {
            //     'Erro ao buscar todos os produtos':
            //         { status: 500, message: '❌ Erro ao buscar todos os produtos!' },
            //     'Ocorreu um erro inesperado':
            //         { status: 500, message: '❌ Ocorreu um erro inesperado!' },
            // }

            // const errorMapped = errorMap[errorMessage];
            // res.status(errorMapped.status).json({
            //     message: errorMapped.message,
            //     error: errorMessage
            // })
        }
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

    async findAllByProdutiPai(req, res) {
        try {
            const result = await this.produtoService.findAllByProdutiPai();
            res.status(200).json({
                message: '✅ Todos os produtos filhos encontrados com sucesso!',
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

    async findAllVariacoes(req, res) {
        try {
            const idProduto = req.params.id;
            const result = await this.produtoService.findAllVariacoes(idProduto);
            res.status(200).json({
                message: '✅ Variações de produto encontrados com sucesso!',
                produtos: result
            })
        }
        catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inespesrado!';

            const errorMap = {
                'Erro ao buscar variações de produto':
                    { status: 500, message: '❌ Erro ao buscar variações de produto!' },
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

    async updateImg(req, res) {
        try {
            const { id } = req.params;
            const imagem = req.file?.filename;

            await this.produtoService.updateImg(id, imagem);
            return res.status(200).json({
                message: 'Produto Atualizado com sucesso!'
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

    async changeAtivo(req, res) {
        try {
            const { id } = req.params;

            await this.produtoService.changeAtivo(id);
            return res.status(200).json({
                message: 'Produto Atualizado com sucesso!'
            })
        }
        catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um erro inespesrado!';

            const errorMap = {
                'Erro ao alterar o produto ativo':
                    { status: 500, message: '❌ Erro ao alterar o produto ativo!' },
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