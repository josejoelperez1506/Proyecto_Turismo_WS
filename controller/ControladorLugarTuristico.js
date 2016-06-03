/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */
/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */
module.exports = function (app){
    return{
        add:function (req, res){
            var lugarT = app.get('lugarT');
            lugarT.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }).then(function (lugarT) {
                res.json(lugarT);
            });
        },
        list:function (req, res) {
            var lugarT = app.get('hotel');
            lugarT.findAll().then(function (lugarT) {
                res.json(lugarT);
            });
        },
        edit:function(req, res){
            var lugarT = app.get('hotel');
            lugarT.find(req.body.id_lugarturistico).then(function (lugarT) {
                if(lugarT){
                    lugarT.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion
                    }).then(function (lugarT) {
                        res.json(lugarT);
                    });
                }else{
                    res.status(404).send({ message: 'lugar turistico no encontrado'});
                }
            });
        },
        delete:function(req, res){
            var lugarT = app.get('lugarT');
            Hotel.destroy({
                where:{
                    id_lugarturistico: req.body.id_lugarturistico
                }
            }).then(function (lugarT){
                res.json(lugarT);
            });
        },

        prueba:function(req, res){
            var lugarT = app.get('lugarT');
            lugarT.find(req.body.id_departamento).then(function (lugarT) {
                if(lugarT){
                    res.json(lugarT);
                }else {
                    res.status(404).send({ message: "lugar turistico no encontrado"});
                }
            });
        },

        lugarhotel:function(req,res){
            var lugarT = app.get('lugarT');
            var LugarTuristico = app.get('lugarturistico');
            lugarT.find({ where: { id_lugarturistico: req.params.id }, include: [LugarTuristico]}).then(function (lugarT){
                res.json(lugarT);
            });
        }
    }
}