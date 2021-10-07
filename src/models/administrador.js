const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const administradorSchema = new Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    tipoDoc: {
        type: String
    },
    numDoc: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confiPass: {
        type: String
    }
}, {
    collection: "administradores"
});

module.exports = mongoose.model('Adminstrador', administradorSchema);
