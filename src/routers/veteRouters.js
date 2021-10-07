const express = require('express');
const veteController = require('../controllers/veteControllers');

class VeteRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const adminC = new veteController.default();
        this.router.get('/admin', adminC.getAlladmin);
    }
}
exports.default = VeteRouter;



