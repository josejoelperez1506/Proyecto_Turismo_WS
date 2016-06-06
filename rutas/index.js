/**
 * Created by informatica on 06/06/2016.
 */
var ruta=require('express').Router();

module.exports=(function(modelo){
    var usuario=require('../controller/ControladorUsuario.js')(modelo);
    var contacto=require('../controller/ControladorContacto.js')(modelo);
    var departamento =require('../controller/ControladorHotel.js')(modelo);
    var hotel=require('../controller/ControladorHotel.js')(modelo);
    var restaurante=require('../controller/ControladorRestaurante.js')(modelo);
    var lugarTuristico=require('../controller/ControladorLugarTuristico.js')(modelo);
    ruta.get('/',function(peticion,respuesta){
        respuesta.send("Servicio iniciado");
    });

    /*
     Rutas para Usuario
     */
    ruta.post('/usuario/registro',usuario.registro);
    ruta.post('/usuario/login',usuario.login);

    ruta.get('/token',usuario.tokenGenerator);

    ruta.use(usuario.tokenMiddleware);

    ruta.get('/prueba',usuario.prueba)
    /*
     Rutas para Contacto
     */
    ruta.get('/contacto/:id',contacto.list);
    ruta.post('/contacto',contacto.add);
    ruta.put('/contacto/:id',contacto.edit);
    ruta.delete('/contacto/:id',contacto.delete);



    return ruta;
});