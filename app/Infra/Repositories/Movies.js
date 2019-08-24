'use strict'

const Model = use('Model')
const Movies = use('App/Models/Movies');
const MoviesTypes = use('App/Models/MoviesTypes');

class MoviesRepository extends Model {
    async create(params) {
        return await Movies.create(params);
    }

    async get() {
        return await Movies.query().fetch();
    }

    async getByType() {
        return await MoviesTypes.query().with('movie').with('type').fetch();
    }
}

module.exports = MoviesRepository