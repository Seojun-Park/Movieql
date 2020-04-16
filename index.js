import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const PORT = 4000;

const server = new GraphQLServer({
    typeDefs: ` type Movie {
        id: Int!
        title: String!
        rating: Float
        description_intro: String
        language: String
        medium_cover_image: String
        genres: [String]
        small_cover_image: String
        large_cover_image: String
        background_image: String
        year: Int
        summary: String
        runtime: Int
        synopsis: String
    }
    
    type Query {
        movies(
            limit: Int
            rating: Float
        ): [Movie]!
        movie(
            id: Int!
        ): Movie
        suggestions(
            id: Int!
        ): [Movie]!
    }
    `,
    resolvers
})

server.start({ port: PORT }, ()  => console.log(`Graphql Server Running on ${PORT}`));