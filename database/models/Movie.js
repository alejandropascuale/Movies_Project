//const { DataTypes } = require("sequelize/types");
//const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {

    const columnas = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: dataTypes.STRING(500),
    },
    rating: {
        type: dataTypes.DECIMAL,
    },
    awards: {
        type: dataTypes.INTEGER,
    },
    release_date: {
        type: dataTypes.DATE,
    },
    length: {
        type: dataTypes.INTEGER,
    },
    genre_id: {
        type: dataTypes.INTEGER,
    }
    }
    const configuracionAdicional = {
        underscored: true
    }

    const Movie = sequelize.define ('Movie', columnas, configuracionAdicional);
    return Movie;
}