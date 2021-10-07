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
    }
}
exports.default = AdminRouter;



