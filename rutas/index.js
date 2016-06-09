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

    //Rutas para Departamento

    ruta.get('/departamento/:id',departamento.list);
    ruta.post('/departamento',departamento.add);
    ruta.put('/departamento/:id',departamento.edit);
    ruta.delete('/departamento/:id',departamento.delete);

    //Rutas para Hotel

    ruta.get('/hotel/:id',hotel.list);
    ruta.post('/hotel',hotel.add);
    ruta.put('/hotel/:id',hotel.edit);
    ruta.delete('/hotel/:id',hotel.delete);

    //Rutas para LugarTuristico

    ruta.get('/lugarTuristico/:id',lugarTuristico.list);
    ruta.post('/lugarTuristico',lugarTuristico.add);
    ruta.put('/lugarTuristico/:id',lugarTuristico.edit);
    ruta.delete('/lugarTuristico/:id',lugarTuristico.delete);
 
    //Rutas para Restaurante

    ruta.get('/restaurante/:id',restaurante.list);
    ruta.post('/restaurante',restaurante.add);
    ruta.put('/restaurante/:id',restaurante.edit);
    ruta.delete('/restaurante/:id',restaurante.delete);

    //Rutas para Usuario

    ruta.get('/usuario/:id',usuario.list);
    ruta.post('/usuario',usuario.add);
    ruta.put('/usuario/:id',usuario.edit);
    ruta.delete('/usuario/:id',usuario.delete);

    return ruta;
});