'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MoviesTypes extends Model {
    movie() {
        return this.hasOne('App/Models/Movies', 'movie_id', 'id');
    }

    type() {
        return this.hasOne('App/Models/TypesMovies', 'type_movie_id', 'id');
    }
}

module.exports = MoviesTypes