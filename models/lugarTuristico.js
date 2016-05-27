/**
 * Created by Fam. Pérez Sontay on 26/05/2016.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('lugarTuristico', {
        idlugarTuristico: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING,
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
        tableName: 'lugarTuristico',
        timestamps:false
    });
};
