const mascotas = require('../models/mastotas');


class MascotaControllers{

    constructor(){

    }

    //Obtener todas las mascotas
    getAllmascota(req, res) {
        mascotas.find((error, data) =>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }
    //Obtener Mascotas por Id
    getMascotaById(req, res) {
        let id = req.params.id;
        mascotas.findById(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }
    // Registrar Mascotas
    register(req, res){
        mascotas.create(req.body, (error, data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(201).json(data);
            }
        });
    }
    // Actualizar Veterinarios
    update(req, res){
        let { id, veterinario, nombreDueño, ident_dueño, tel_dueño, email_dueño, nombreMascota, tipo, genero, fecha_vacuna, vacuna } = req.body;
        let objMasco = {
            veterinario,
            nombreDueño,
            ident_dueño,
            tel_dueño,
            email_dueño,
            nombreMascota,
            tipo,
            genero,
            fecha_vacuna,
            vacuna
        };
        mascotas.findByIdAndUpdate(id, {
            $set: objMasco
        }, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }
    // eliminar veterinarios
    deleteMascota(req, res){
        let { id } = req.body;
        mascotas.findByIdAndRemove(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }

}

exports.default = MascotaControllers;
