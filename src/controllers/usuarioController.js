class UsuarioController {
    constructor( { usuarioService }){
        this.usuarioService = usuarioService;
    }

    async create(req, res){
        try {
            const usuario = req.body;

            // Método para validar se há dados no corpo da requisição
            this.usuarioService.validateData(usuario);

            // Criação do usuário
            const usuarioCriado = await this.usuarioService.create(usuario);

            res.status(201).json({
                message: 'Usuário criado com sucesso!',
                usuario: usuarioCriado
            })
        }
        catch(error){
            console.error(error);
            const errorMessage = error.message || 'Ocorreu um error inesperado!';

            const errorMap = {
                'Dados não informados!':
                    {status: 400, message: 'Dados não informados no corpo da requisição!'},
                'Erro ao criar o usuário':
                    {status: 400, message: 'Erro ao criar o usuário!'},
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

export default UsuarioController;