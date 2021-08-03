//const { DataTypes } = require("sequelize/types");
//const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const columnas = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(500),
    },
    rating: {
        type: DataTypes.DECIMAL,
    },
    awards: {
        type: DataTypes.INTEGER,
    },
    release_date: {
        type: DataTypes.DATE,
    },
    length: {
        type: DataTypes.INTEGER,
    },
    genre_id: {
        type: DataTypes.INTEGER,
    }
    }
    const configuracionAdicional = {
        underscored: true
    }

    const Movie = sequelize.define ('Movie', columnas, configuracionAdicional);
    return Movie;
}