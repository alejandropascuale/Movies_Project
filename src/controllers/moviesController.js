const db = require('../../database/models');

const Movie = db.Movie;


module.exports = {
    list (req, res) {
        Movie.findAll()
        .then(
            (peliculas) => res.render ('moviesList', {movies: peliculas})
            )
            
        .catch (
            (error) => res.send (error)
            )
    },
    detail (req, res) {
        Movie.findByPk(req.params.id)
        .then(
            (movie) => {res.render ('moviesDetail', {movie})}
            )
    },
    new (req, res) {
        Movie.findAll(
            {order: [['release_date', 'DESC']]}
        )
        .then(
            (movies) => res.render ('newestMovies', {movies})
        )
        .catch(
            (error) => res.send(error)
        )
    },
    recomended (req, res) {
        Movie.findAll(
            {
                order: [['rating', 'DESC'],['release_date', 'DESC']],
                limit: 5
            }
        )
        .then(
            (movies) => res.render ('recommendedMovies', {movies})
        )
        .catch(
            (error) => res.send(error)
        )
    }
}