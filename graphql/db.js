let movies =[
    {
        id: 0,
        name: "Oldboy",
        score: 1
    },
    {
        id: 1,
        name: "Parasite",
        score: 1
    },
    {
        id: 2,
        name: "StarWars",
        score: 2
    },
    {
        id: 3,
        name: "Harry Potter",
        score: 3
    }
]

export const getMovie = () => movies

export const getById = id => {
    const filtered = movies.filter(movie => movie.id === id);
    return filtered[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie ={
        id : `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    console.log(movies);
    return newMovie;
}