import IUsuarioRepository from '../interfaces/iUsuarioRepository.js';
import UsuarioModel from '../models/usuarioModel.js';

class UsuarioRepository extends IUsuarioRepository {
    async create(usuario){
        return await UsuarioModel.create(usuario);
    }

    async findAll(){
        return await UsuarioModel.findAll();
    }

    async findById(id){
        return await UsuarioModel.findByPk(id);
    }
}

export default UsuarioRepository;