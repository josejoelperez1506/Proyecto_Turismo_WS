/**
 * Created by Fam. Pérez Sontay on 26/05/2016.
 */
/**
 * Created by Fam. Pérez Sontay on 26/05/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('restaurante', {
        idRestaurante: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono: {
            type: DataTypes.INTEGER(15),
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        punteo: {
            type: DataTypes.INTEGER(15),
            allowNull: true
        },
        idDepartamento: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
            references: {
                model: 'departamento',
                key: 'idDepartamento'
            }
        }
    }, {
        tableName: 'hotel',
        timestamps:false
    });
};