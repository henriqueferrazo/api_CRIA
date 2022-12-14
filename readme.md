<br />
<p align="center">

  <h3 align="center">CRIA API</h3>
 <br />
  <p align="center">
     Sumário
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href:"#fluxo"> Fluxo </a> 
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
  </p>
</p>


# Sobre
CRIA é uma api que processa ordens de serviço da empresa de logistica EE, tem como funcionalidade monitorar ordens de serviço para casas de dificil acesso. 

Esta Api foi cria por uma equipe de estagiarios da calindra com intuito de apresentar um produto que possa fazer a diferença.

# Fluxo

### Essa imagem representa a ideia geral do projeto
<img align="center" src="./readme/img/ideiaGeral.png"></p></br>

### Nessa fase a api esta ouvindo as ordens de serviço sendo criadas mas ainda não tem acesso aos dados do cliente final, assim primeiro ela recebe o id da ordem de serviço e em seguida ela da um get nessa ordem buscando todos os dados da mesma e envia para sua rota 'cria/address'.</br>
<img align="center" src="./readme/img/apiPegaId.png"></p></br>

### Nessa fase a api faz o processo de filtragem dos dados, ela busca saber se a geolocalização ou o cep pertence a uma area cadastrada como area Cria, caso ela seja confirmada será salva e enviado um email ao cliente que conterá o link de mudança da sua geolocalização. Esse mapa deverá fazer um get nessa localização e após a mudança um put para atualizar sua geolocalização.
<img align="center" src="./readme/img/fluxoCompleto.png"></p></br>

# Rotas da aplicação:

## Address e Ordem de serviço

<b>[GET]</b> /cria- A rota deve exibir todos os clientes.<br>

<b>[GET]</b> /cria/id - A rota deve listar um cliente baseado em seu ID.<br>

<b>[POST] </b> /cria/address - A rota recebera uma ordem de serviço e validara se ela pertence a uma localidade cadastrada como cria <br>

<b>[PUT]</b>/cria/newAddress - A rota servira para que o cliente final modifique sua geolocalização.

<b>[POST]</b>/ee/serviceOrder - A rota é porta de entrada para todo o sistema, ela recebe o id da ordem de serviço e desencadeia todo o sistema.


```json
{
"serviceId":"string",
"zipCode":"string",
"latitude": "number",
"longitude":"number",
"email":"email@email.com.br"
}
```

<b>[PUT] </b> /cria/newAddress/id - A rota deve atualizar um cliente com as informações passadas no body da requisição com os dados da latitude e longitude..<br>

```json
{
"latitude": "number",
"longitude":"number",
}
```

<!-- <b>[DELETE] </b> /franquias/id - A rota deve deletar uma franquia baseado em seu ID.<br> -->

 
# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/).

### Instalando e rodando o projeto:



# Clone este repositório
$ git clone https://github.com/henriqueferrazo/api_CRIA

# Instale as dependências do projeto
$ yarn install

# Inicie o servidor da aplicação
$ yanr dev

# Utilize o Insomnia ou o Postman para realizar as requisições nas rotas na URL:
http://localhost:3000/



# Conhecimentos Praticados
✔ NodeJs <br>
✔ Express <br>
✔ Mongoose <br>
✔ Mongo Atlas <br>
✔ Typescript <br>
✔ Padrão MVC <br>
# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://www.sqlite.org/index.html"><img src="./readme/sqlite-icon.svg" height="40" width="40" /></a> 





