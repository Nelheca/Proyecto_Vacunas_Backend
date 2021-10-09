//Importar express
const express = require('express');
//Importar rutas
const adminRouter = require('./routers/adminRouters');
const mascotaRouter = require('./routers/mascotaRouter');
//Importar mongoose
const mongoose = require('mongoose');
//Importar el módulo que contiene la url de la bd
const database = require('./database/datab');

//Importar cors
//const cors = require('cors');

class Server{
    //constructor
    constructor(){
        //Llamar al método de conexión a la bd
        this.conectarBD();
        //Crea una aplicación express
        this.app = express();
        //Configurar el puerto por el que correrá el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que se manejarán solicitudes con información JSON
        this.app.use(express.json());
        //this.app.use(cors());
        //Rutas
        const router = express.Router();
        router.get('/', (req, res)=>{
            console.log("Conexión exitosa..");
            res.status(200).json({message: "Conexión exitosa"});
        });
        /*****************RUTAS DEL SERVIDOR***************/
        const adminR = new adminRouter.default();
        this.app.use(adminR.router);

        const mascoR = new mascotaRouter.default();
        this.app.use(mascoR.router);
        
        /**************AGREGAR LAS RUTAS CREADAS AL SERVIDOR*************/
        this.app.use(router);
        
        //Levantar el servidor web
        this.app.listen( this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        } );
    }


    conectarBD(){
        mongoose.connect(database.datab).then(()=>{
            console.log("Conexión exitosa a la BD")
        }).catch(error=>{
            console.log(error);
        })
    }
}

const objServer = new Server();
