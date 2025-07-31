class ProdutoService {
  constructor({ produtoRepository }) {
    this.produtoRepository = produtoRepository;
  }

  async create(produto) {
    try {
      console.log("🚀 Iniciando create de produto:", produto);
      if (Array.isArray(produto)) {
        console.log("🚀 Produto é um array, processando cada item...");
        const results = await Promise.all(produto.map(async (item) => {
          const produtoItem = {
            id: item.id,
            id_produto_pai: item.idProdutoPai ?? null,
            nome: item.nome,
            codigo: item.codigo,
            preco: item.preco,
            estoque: item.estoque?.saldoVirtualTotal ?? 0,
            tipo: item.tipo,
            situacao: item.situacao,
            formato: item.formato,
            descricao_curta: item.descricaoCurta,
          };

          return await this.produtoRepository.create(produtoItem);
        }));
        console.log("✅ Produtos criados com sucesso:");
        return results;
      }

      return await this.produtoRepository.create({
        id: produto.id,
        id_produto_pai: produto.idProdutoPai ?? null,
        nome: produto.nome,
        codigo: produto.codigo,
        preco: produto.preco,
        estoque: produto.estoque.saldoVirtualTotal ?? 0,
        tipo: produto.tipo,
        situacao: produto.situacao,
        formato: produto.formato,
        descricao_curta: produto.descricaoCurta,
      });
    } catch (error) {
      console.error("❌ Erro geral no create:", error.message);
      throw new Error('Erro ao criar o(s) produto(s)!');
    }
  }

  async findAll() {
    try {
      return await this.produtoRepository.findAll();
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar todos os produtos!');
    }
  }

  async findAllByProdutiPai() {
    try {
      return await this.produtoRepository.findAllByProdutiPai();
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar produtos por produto pai!');
    }
  }

  async findAllVariacoes(idProduto){
    try {
      return await this.produtoRepository.findAllVariacoes(idProduto);
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar variações de produto!');
    }
  }

  async findById(id) {
    try {
      return await this.produtoRepository.findById(id);
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar o produto por ID!');
    }
  }

  async updateImg(id, data){
    try {
      const produtoExiste = await this.findById(id);
      if (!produtoExiste){
        throw new Error('O Produto com o ID informado não existe');
      }

      const produtoUpdate = await this.produtoRepository.updateImg(id, data);
      return produtoUpdate;  
    }
    catch(error){
      console.log()
      console.error(error);
      throw new Error('Erro ao atualizar o Produto!')
    }
  }

  async changeAtivo(id){
    try {
      const produtoExiste = await this.findById(id);
      if (!produtoExiste){
        throw new Error('O Produto com o ID informado não existe');
      }

      const ativo = produtoExiste.ativo; // Inverte o estado de ativo
      const produtoUpdate = await this.produtoRepository.changeAtivo(id, !ativo);
      return produtoUpdate;  
    }
    catch(error){
      console.log()
      console.error(error);
      throw new Error('Erro ao alterar o produto ativo!')
    }
  }
}

export default ProdutoService;
