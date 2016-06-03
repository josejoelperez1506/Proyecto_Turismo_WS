/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */
module.exports = function (app){
    return{
        add:function (req, res){
            var Restaurante = app.get('restaurante');
            Restaurante.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }).then(function (restaurante) {
                res.json(restaurante);
            });
        },
        list:function (req, res) {
            var Restaurante = app.get('restaurante');
            Restaurante.findAll().then(function (restaurante) {
                res.json(restaurante);
            });
        },
        edit:function(req, res){
            var Restaurante = app.get('restaurante');
            Departamento.find(req.body.idRestaurante).then(function (restaurante) {
                if(restaurante){
                    restaurante.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion
                    }).then(function (restaurante) {
                        res.json(restaurante);
                    });
                }else{
                    res.status(404).send({ message: 'restaurante no encontrado'});
                }
            });
        },
        delete:function(req, res){
            var Restaurante = app.get('restaurante');
            Restaurante.destroy({
                where:{
                    idRestaurante: req.body.idRestaurante
                }
            }).then(function (restaurante){
                res.json(restaurante);
            });
        },

        prueba:function(req, res){
            var Restaurante = app.get('restaurante');
            Restaurante.find(req.body.idRestaurante).then(function (restaurante) {
                if(restaurante){
                    res.json(restaurante);
                }else {
                    res.status(404).send({ message: "restaurante no encontrado"});
                }
            });
        },

        departamentolugares:function(req,res){
            var Departamento = app.get('departamento');
            var Restaurante = app.get('restaurante');
            Departamento.find({ where: { idRestaurante: req.params.id }, include: [LugarTuristico]}).then(function (restaurante){
                res.json(restaurante);
            });
        }
    }
}