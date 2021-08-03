const db = require('../../database/models');

const genres = db.Genre;

module.exports = {
    list (req, res) {
        genres.findAll()
        .then(
            (genres) => {res.render ('genresList', {genres})}
            )
            
        .catch (
            (error) => res.send (error)
            )
    },
    detail (req, res) {
        genres.findByPk(req.params.id)
        .then(
            (genre) => {res.render ('genresDetail', {genre})}
            )
    }
}