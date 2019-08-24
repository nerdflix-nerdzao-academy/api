'use strict'
const MoviesRepository = use('App/Infra/Repositories/Movies');

class GetMovieCommand {

    async execute({ response }) {
        try {
            let data = await new MoviesRepository().get();

            return response.status(200).json(data);

        } catch (error) {
            return response.status(422).json({ message: 'UNPROCESSABLE_ENTITY' });
        }

    }
}
module.exports = GetMovieCommand