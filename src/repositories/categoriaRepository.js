import ICategoriaRepository from '../interfaces/iCategoriaRepository.js';
import CategoriaModel from '../models/categoriaModel.js';

class CategoriaRepository extends ICategoriaRepository {
    async create(categoria){
        return await CategoriaModel.create(categoria);
    }
    async findAll(){
        return await CategoriaModel.findAll();
    }
    async findById(id){
        return await CategoriaModel.findByPk(id);
    }
}

export default CategoriaRepository;