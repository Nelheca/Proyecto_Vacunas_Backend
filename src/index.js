//Importar express
const express = require('express');
//Importar Rutas
const veteRouter = require('./routers/veteRouters');

class Server{
    //constructor
    constructor(){
        //Crea una aplicación express
        this.app = express();
        //Configurar el puerto por el que correrá el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que se manejarán solicitudes con información JSON
        this.app.use(express.json());
        //Rutas
        const router = express.Router();
        router.get('/', (req, res)=>{
            console.log("Conexión exitosa..");
            res.status(200).json({message: "Conexión exitosa"});
        });
        //Agregar las rutas de users
        const adminR = new veteRouter.default();
        this.app.use(adminR.router);
        
        //agregar la ruta a la app express
        this.app.use(router);
        //Levantar el servidor web
        this.app.listen( this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        } );
    }
}


const objServer = new Server();
