FROM node:18

# Cria o diretório da aplicação dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro para aproveitar o cache
COPY package*.json ./
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta que a API utiliza
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "src/server.js"]
