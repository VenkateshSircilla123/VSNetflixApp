const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    trending: `/trending/all/day?api_key=${API_KEY}`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests