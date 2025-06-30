const { connect } = require('../controllers/db.js');

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.senha = senha;
    }

    async insertUser(nome, senha){
        const collection = await connect();
        try{
            await collection.insertOne({'nome': `${nome}`, 'senha': `${senha}`});
            //console.log("Usuario Inserido");
        }catch(err){
            console.error(err);
        }
    }

    async getAllUsers(){
        const collection = await connect();
        let users = await collection.find({}).toArray();
        return users;
    }

    async getUser(nome){
        const collection = await connect();
        let user = await collection.find({'nome': nome}).toArray();
        return user;
    }

    async updateUser(nomeAntigo, senhaAntiga, novoNome, novaSenha){
        const collection = await connect();
        let result = await collection.updateOne({'nome': nomeAntigo, 'senha': senhaAntiga}, {$set: {'nome': novoNome, 'senha': novaSenha}});
        return result;
    }

    async deleteUser(nome){
        const collection = await connect();
        let result = await collection.deleteOne({'nome': nome});
        return result
    }

}

module.exports = { Usuario }