FROM node:18

# Diretório de trabalho
WORKDIR /

# Instala o sequelize-cli globalmente
RUN npm install -g sequelize-cli

# Copia dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando de start
CMD ["sh", "-c", "npx --yes sequelize-cli db:migrate --config src/config/config.cjs && npm start"]

