<h1>API-REST</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=Node&message=17.4.0&color=red&style=for-the-badge&logo=node.js"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p> 



## Descrição do projeto 

<p align="justify">
  Site de perguntas e respostas anônimas desenvolvido durante os meus estudos de Node.js.
</p>



## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

## Iniciando/Configurando banco de dados

Na pasta database precisa ser criado o arquivo database.js e usando a biblioteca sequelize fazer a conexão com o sem banco de dados:

```javascript
const Sequelize = require("sequelize");

const connection = new Sequelize("NOME_DO_BANCO","NOME_USUARIOS","SENHA",{
    host:"localhost",
    dialect:"mysql"
});

module.exports = connection;
```



## Libs utilizadas :books:

- [Express]() : `npm install express --save`
- [Body-parser]() : `npm install body-parser --save`
- [Sequelize]() : `npm install sequelize --save`
- [Mysql2]() : `npm install mysql2 --save`
- [Ejs]() : `npm install ejs --save`
