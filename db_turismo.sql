/*
SQLyog Community v11.42 (32 bit)
MySQL - 5.1.41 : Database - db_turismo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_turismo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_turismo`;

/*Table structure for table `departamentos` */

DROP TABLE IF EXISTS `departamentos`;

CREATE TABLE `departamentos` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `departamentos` */

insert  into `departamentos`(`id_departamento`,`nombre`,`descripcion`,`createdAt`,`updatedAt`) values (1,'Petén','Ubicado en el norte del pais','2016-06-09 10:53:11','2016-06-09 10:53:14'),(2,'Izabal','Ubicado al noroeste del pais','2016-06-09 10:55:35','2016-06-09 10:55:37'),(3,'Alta Verapaz','Ubicado al norte del pais','2016-06-09 10:55:54','2016-06-09 10:55:56'),(4,'Escuintla','Ubicado al sur del pais','2016-06-09 10:56:07','2016-06-09 10:56:09'),(5,'Suchitepequez','Ubicado al suroeste del pais','2016-06-09 10:56:32','2016-06-09 10:56:34'),(6,'Sacatepequez','Ubicado en el area metropolitano','2016-06-09 10:56:52','2016-06-09 10:56:55'),(7,'San Marcos','Ubicado al oeste del pais','2016-06-09 17:03:59','2016-06-09 17:03:59'),(8,'','','2016-06-09 17:12:19','2016-06-09 17:12:19');

/*Table structure for table `hotels` */

DROP TABLE IF EXISTS `hotels`;

CREATE TABLE `hotels` (
  `id_hotel` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `punteo` int(11) NOT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_hotel`),
  KEY `id_departamento` (`id_departamento`),
  CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `hotels` */

insert  into `hotels`(`id_hotel`,`nombre`,`direccion`,`punteo`,`id_departamento`,`createdAt`,`updatedAt`) values (1,'El paraiso','13 calle 15- 81 zona 7',5,1,'2016-06-09 10:54:01','2016-06-09 10:54:03'),(2,'Villa Real','14 calle 26 - 9 zona 13',4,1,'2016-06-09 10:54:49','2016-06-09 10:54:50');

/*Table structure for table `lugarturisticos` */

DROP TABLE IF EXISTS `lugarturisticos`;

CREATE TABLE `lugarturisticos` (
  `id_lugarturistico` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_lugarturistico`),
  KEY `id_departamento` (`id_departamento`),
  CONSTRAINT `lugarturisticos_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `lugarturisticos` */

insert  into `lugarturisticos`(`id_lugarturistico`,`nombre`,`descripcion`,`direccion`,`id_departamento`,`createdAt`,`updatedAt`) values (1,'Semuc Champey','Sitio Turistico','26 calle  24 - 26 zona 15',3,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'Castillo de San Felipe','Area recreativo','24 avenida 9 - 45 zona 7',2,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*Table structure for table `restaurantes` */

DROP TABLE IF EXISTS `restaurantes`;

CREATE TABLE `restaurantes` (
  `id_restaurante` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_restaurante`),
  KEY `id_departamento` (`id_departamento`),
  CONSTRAINT `restaurantes_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `restaurantes` */

insert  into `restaurantes`(`id_restaurante`,`nombre`,`telefono`,`direccion`,`id_departamento`,`createdAt`,`updatedAt`) values (1,'El comedor',55623578,'13 calle 15 - 16 zona 7',3,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'El churrasco',24523512,'15 avenida 12 - 85 zona 13',6,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `nick` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_usuario`,`nombre`,`telefono`,`correo`,`nick`,`contrasena`,`direccion`,`createdAt`,`updatedAt`) values (1,'jose perez',55594005,'jperez@gmail.com','jperez','123','15 calle 12 - 89 zona 7','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'emmanuel franco',23564521,'efranco@gmail.com','efranco','122','16 avenida 19 - 78 zona 7','0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
