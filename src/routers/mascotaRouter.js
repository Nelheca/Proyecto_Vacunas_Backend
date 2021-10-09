const express = require('express');
const mascotaControllers = require('../controllers/mascotaControllers');

class mascotaRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const mascoC = new mascotaControllers.default();
        this.router.get('/mascota', mascoC.getAllmascota);
        this.router.get('/mascota/:id', mascoC.getMascotaById);
        this.router.post('/mascota', mascoC.register);
        this.router.put('/mascota', mascoC.update);
        this.router.delete('/mascota', mascoC.deleteMascota);
        

    }
}
exports.default = mascotaRouter;