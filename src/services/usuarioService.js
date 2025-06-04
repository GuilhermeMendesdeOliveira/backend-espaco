class UsuarioService {
    constructor({ usuarioRepository }){
        this.usuarioRepository = usuarioRepository;
    }

    async create(usuario) {
        try {
            return await this.usuarioRepository.create(usuario);
        }
        catch(error){
            console.error(error);
            throw new Error('Erro ao criar o usuário');
        }
    }

    validateData(data){
        if ( !data ){
            throw new Error('Dados não informados');
        }
    }
}
export default UsuarioService;