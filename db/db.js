const Sequelize = require("sequelize");

console.log(Sequelize);

const connection = new Sequelize("consuniv", "root", "123",{
    host: "localhost",
    dialect:"mysql"

});

const conexao = connection.authenticate()
    .then(function(){
       console.log('Conexão com o MySQL foi estabelecida com sucesso');
    })
    .catch(function (err) {
      console.error('Erro ao se conectar' + err);
    });

console.log(conexao);

module.exports = connection;

