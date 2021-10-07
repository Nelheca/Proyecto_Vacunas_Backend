const administrador = require('../models/administrador');


class AdminController{

    constructor(){

    }

    //Obtener todos los Veterianrios
    getAlladmin(req, res) {
        administrador.find((error, data) =>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }
    //Obtener Veterianrio por Id
    getAdminById(req, res) {
        let id = req.params.id;
        administrador.findById(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }
    // Registrar Veterinarios
    register(req, res){
        administrador.create(req.body, (error, data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(201).json(data);
            }
        });
    }
    // Actualizar Veterinarios
    update(req, res){
        let { id, nombres, apellidos, tipoDoc, numDoc, password, confiPass } = req.body;
        let objAdmin = {
            nombres,
            apellidos,
            tipoDoc,
            numDoc,
            password,
            confiPass
        };
        administrador.findByIdAndUpdate(id, {
            $set: objAdmin
        }, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }
    // eliminar veterinarios
    deleteAdmin(req, res){
        let { id } = req.body;
        administrador.findByIdAndRemove(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }

}

exports.default = AdminController;
