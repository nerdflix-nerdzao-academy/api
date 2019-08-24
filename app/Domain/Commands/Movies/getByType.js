'use strict'
const MoviesRepository = use('App/Infra/Repositories/Movies');

class GetMovieByTypeCommand {

    async execute({ response }) {
        try {
            let data = await new MoviesRepository().getByType();
            data = data.toJSON()
            data = [...data, ...data];
            data = data.reduce(function(groups, item) {
                const { id } = item.type;
                (groups[id]) ? groups[id].movies.push(item): groups[id] = {...item.type, movies: [item] };

                return groups
            }, {})

            return response.status(200).json(data);
        } catch (error) {
            return response.status(422).json({ message: 'UNPROCESSABLE_ENTITY' });

        }
    }
}
module.exports = GetMovieByTypeCommand