//const { DataTypes } = require("sequelize/types");
//const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const columnas = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    ranking: {
        type: DataTypes.INTEGER,
    },
    active: {
        type: DataTypes.BOOLEAN
    }
    }
    const configuracionAdicional = {
        underscored: true
    }

    const Genre = sequelize.define ('Genre', columnas, configuracionAdicional);
    return Genre;
}