/**
 * Created by Fam. Pérez Sontay on 26/05/2016.
 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('departamento', {
        idDepartamento: {
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
        }
    }, {
        tableName: 'departamento',
        timestamps:false
    });
};