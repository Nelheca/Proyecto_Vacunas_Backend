const express = require('express');
const adminController = require('../controllers/adminControllers');

class AdminRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const adminC = new adminController.default();
        this.router.get('/admin', adminC.getAlladmin);
        this.router.get('/admin/:id', adminC.getAdminById);
        this.router.post('/admin', adminC.register);
        this.router.put('/admin', adminC.update);
        this.router.delete('/admin', adminC.deleteAdmin);
        

    }
}
exports.default = AdminRouter;



