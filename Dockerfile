FROM node:15

#Diretório principal da aplicação dentro do container
WORKDIR /usr/src/app

# Copiando dependências das aplicação a partir da raiz do projeto ./
# com isso aproveitamos o cache das layes do docker
COPY package*.json ./

# Instalando as dependecias
RUN npm install
#ou
#caso formos buildar para produção 
# RUN npm ci --only=production

# copiando o conteúdo da nossa pasta atual para o container
COPY . .

# Expondo a porta da aplicação
EXPOSE 8080

#Comando que será executado ao executar o container 
CMD [ "npm", "start"]