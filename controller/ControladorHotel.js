/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */
module.exports = function (app){
    return{
        add:function (req, res){
            var Hotel = app.get('hotel');
            Hotel.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }).then(function (hotel) {
                res.json(hotel);
            });
        },
        list:function (req, res) {
            var Hotel = app.get('hotel');
            Hotel.findAll().then(function (hotel) {
                res.json(hotel);
            });
        },
        edit:function(req, res){
            var Hotel = app.get('hotel');
            Hotel.find(req.body.id_hotel).then(function (hotel) {
                if(hotel){
                    hotel.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion
                    }).then(function (hotel) {
                        res.json(hotel);
                    });
                }else{
                    res.status(404).send({ message: 'hotel no encontrado'});
                }
            });
        },
        delete:function(req, res){
            var Hotel = app.get('hotel');
            Hotel.destroy({
                where:{
                    id_hotel: req.body.id_hotel
                }
            }).then(function (hotel){
                res.json(hotel);
            });
        },

        prueba:function(req, res){
            var Hotel = app.get('hotel');
            Hotel.find(req.body.id_departamento).then(function (hotel) {
                if(hotel){
                    res.json(hotel);
                }else {
                    res.status(404).send({ message: "hotel no encontrado"});
                }
            });
        },

        lugarhotel:function(req,res){
            var Hotel = app.get('hotel');
            var LugarTuristico = app.get('lugarturistico');
            Hotel.find({ where: { id_hotel: req.params.id }, include: [LugarTuristico]}).then(function (hotel){
                res.json(hotel);
            });
        }
    }
}