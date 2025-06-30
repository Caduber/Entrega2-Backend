const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connect(){
    await client.connect();
    const db = client.db("entrega2");
    const collection = db.collection('usuarios');
    // console.log("banco conectado");

    return collection;
}

module.exports = { connect };