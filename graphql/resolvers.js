import { getById, getMovie, addMovie, deleteMovie } from './db';

const resolvers = {
    Query: {
        movies: () => getMovie(),
        movie: (_, { id }) => getById(id)
    },
    Mutation : {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;