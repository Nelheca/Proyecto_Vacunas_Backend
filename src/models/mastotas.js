const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mascotasSchema = new Schema({
    
    veterinario: {
        type: String
    },
    nombreDueño: {
        type: String
    },
    ident_dueño: {
        type: Number
    },
    tel_dueño: {
        type: Number
    },
    email_dueño: {
        type: String
    },
    nombreMascota: {
        type: String
    },
    tipo: {
        type: String 
    },
    genero: {
        type: String
    },
    fecha_vacuna: {
        type: String
    },
    vacuna: {
        type: String
    }

}, {
    collection: "mascotas"
});

module.exports = mongoose.model('Mascotas', mascotasSchema);
