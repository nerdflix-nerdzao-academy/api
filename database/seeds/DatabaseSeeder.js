'use strict'

const Database = use('Database')
const Movies = use('App/Models/Movies')
const MoviesTypes = use('App/Models/MoviesTypes')
const TypesMovies = use('App/Models/TypesMovies')
const Status = use('App/Models/Status')
const { status } = use('./../../config/enums');

class DatabaseSeeder {
    async run() {
        await Database.raw('PRAGMA foreign_keys = OFF;');
        await Status.truncate();
        await Movies.truncate();
        await MoviesTypes.truncate();

        const statusData = Object.keys(status).map(index => status[index]);
        await Status.createMany(statusData);

        await TypesMovies.createMany([{
                id: 1,
                text: 'Lançamento',
                status_id: 1,
            },
            {
                id: 2,
                text: 'Ação',
                status_id: 1,
            },
            {
                id: 3,
                text: 'Comédia',
                status_id: 1,
            },
        ]);

        await Movies.createMany([{
                id: '863fb728-b654-46be-863a-8c39e8b89af4',
                status_id: 1,
                name: "La Casa de Papel",
                description: "Lorem la Casa de Papel dolor sit amet consectetur, adipisicing elit. Rerum perferendis ipsa aliquid",
                img: "https://raw.githubusercontent.com/nerdzao/academy/nerdflix/front/angular/src/assets/movies/1.jpg"
            },
            {
                id: '850f428d-9646-43ab-92ba-828b9d12a383',
                status_id: 1,
                name: "Black Mirror",
                description: "Mirro ipsum dolor sit amet consectetur, adipisicing elit. Rerum perferendis ipsa aliquid",
                img: "https://raw.githubusercontent.com/nerdzao/academy/nerdflix/front/angular/src/assets/movies/2.jpg"
            },
            {
                id: '10a32c6b-5994-4119-80de-e9392f8cbb2a',
                status_id: 1,
                name: "Breaking Bad",
                description: "Breaking ipsum dolor sit amet consectetur, adipisicing elit. Rerum perferendis ipsa aliquid",
                img: "https://raw.githubusercontent.com/nerdzao/academy/nerdflix/front/angular/src/assets/movies/3.jpg"
            },
            {
                id: 'f1759a68-ab0a-4981-9033-d5c30fffb7ed',
                status_id: 1,
                name: "Vikings",
                description: "Viking ipsum dolor sit amet consectetur, adipisicing elit. Rerum perferendis ipsa aliquid",
                img: "https://raw.githubusercontent.com/nerdzao/academy/nerdflix/front/angular/src/assets/movies/4.jpg"
            },
            {
                id: '10c926d3-611f-433d-b918-1888f510f7cf',
                status_id: 1,
                name: "Bright",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum perferendis ipsa aliquid",
                img: "https://raw.githubusercontent.com/nerdzao/academy/nerdflix/front/angular/src/assets/movies/5.jpg"
            },
            {
                id: 'f115f1f1-d460-4023-adfd-580cde173814',
                status_id: 1,
                name: "Stranger Things",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum perferendis ipsa aliquid",
                img: "https://raw.githubusercontent.com/nerdzao/academy/nerdflix/front/angular/src/assets/movies/6.jpg"
            },
        ]);


        await MoviesTypes.createMany([
            // La Casa de Papel
            {
                movie_id: '863fb728-b654-46be-863a-8c39e8b89af4',
                type_movie_id: 1,
            },
            {
                movie_id: '863fb728-b654-46be-863a-8c39e8b89af4',
                type_movie_id: 2,
            },
            {
                movie_id: '863fb728-b654-46be-863a-8c39e8b89af4',
                type_movie_id: 3,
            },
            // Black Mirror
            {
                movie_id: '850f428d-9646-43ab-92ba-828b9d12a383',
                type_movie_id: 1,
            },
            {
                movie_id: '850f428d-9646-43ab-92ba-828b9d12a383',
                type_movie_id: 2,
            },
            {
                movie_id: '850f428d-9646-43ab-92ba-828b9d12a383',
                type_movie_id: 3,
            },
            // Breaking Bad
            {
                movie_id: '10a32c6b-5994-4119-80de-e9392f8cbb2a',
                type_movie_id: 1,
            },
            {
                movie_id: '10a32c6b-5994-4119-80de-e9392f8cbb2a',
                type_movie_id: 2,
            },
            {
                movie_id: '10a32c6b-5994-4119-80de-e9392f8cbb2a',
                type_movie_id: 3,
            },
            // Vikings
            {
                movie_id: 'f1759a68-ab0a-4981-9033-d5c30fffb7ed',
                type_movie_id: 1,
            },
            {
                movie_id: 'f1759a68-ab0a-4981-9033-d5c30fffb7ed',
                type_movie_id: 2,
            },
            {
                movie_id: 'f1759a68-ab0a-4981-9033-d5c30fffb7ed',
                type_movie_id: 3,
            },
            // Bright
            {
                movie_id: '10c926d3-611f-433d-b918-1888f510f7cf',
                type_movie_id: 1,
            },
            {
                movie_id: '10c926d3-611f-433d-b918-1888f510f7cf',
                type_movie_id: 2,
            },
            {
                movie_id: '10c926d3-611f-433d-b918-1888f510f7cf',
                type_movie_id: 3,
            },
            // Stranger Things
            {
                movie_id: 'f115f1f1-d460-4023-adfd-580cde173814',
                type_movie_id: 1,
            },
            {
                movie_id: 'f115f1f1-d460-4023-adfd-580cde173814',
                type_movie_id: 2,
            },
            {
                movie_id: 'f115f1f1-d460-4023-adfd-580cde173814',
                type_movie_id: 3,
            },

        ]);

        await Database.raw('PRAGMA foreign_keys = ON;')
    }
}

module.exports = DatabaseSeeder