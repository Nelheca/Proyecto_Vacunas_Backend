const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const administradorSchema = new Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    edad: {
        type: Number
    }
}, {
    collection: "administradores"
});

module.exports = mongoose.model('Adminstrador', administradorSchema);
