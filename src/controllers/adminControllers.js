var admin = [
    {nombres: "Nelson", apellidos: "Herrera", tipoDoc: "CC", numDoc: 12345678, email: "nelson@gmail.com", password: "asd123", confiPass: "asd123"},
    {nombres: "Ruben", apellidos: "Conde", tipoDoc: "CC", numDoc: 98765432, email: "ruben@gmail.com", password: "qwef987", confiPass: "qwef987"},

];

class AdminController{

    constructor(){

    }

    getAlladmin(req, res){
        res.status(200).json(admin);
    }

}

exports.default = AdminController;
