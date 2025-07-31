// BlingAPI.js
import axios from 'axios';

export default class BlingAPI {
  constructor({ accessToken }) {
    if (!accessToken) throw new Error('Token de acesso é obrigatório.');
    this.baseURL = 'https://api.bling.com.br/v3';
    this.accessToken = accessToken;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getProdutos() {
    try {
      const todosProdutos = [];
      let paginaAtual = 1;
      let continuar = true;

      while (continuar) {
        const response = await this.client.get('/produtos', {
          params: {
            pagina: paginaAtual,
            limite: 100, // valor máximo permitido pela API da Bling
          },
        });
        const produtos = response.data.data || [];

        todosProdutos.push(...produtos);

        // Se a quantidade de produtos retornados for menor que o limite, é a última página
        if (produtos.length < 100) {
          continuar = false;
        } else {
          paginaAtual++;
        }
      }

      console.log('TOTAL DOS PRODUTOS:', todosProdutos.length);
      return todosProdutos;
    } catch (error) {
      console.error('Erro ao buscar todos os produtos:', error.response?.data || error.message);
      throw error;
    }
  }
}
