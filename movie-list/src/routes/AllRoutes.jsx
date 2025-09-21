import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList api="movie/now_playing" title="Now Playing" />} />
            <Route path="/movies/popular" element={<MovieList api="movie/popular" title="Popular Movies" />} />
            <Route path="/movies/top" element={<MovieList api="movie/top_rated" title="Top Rated Movies" />} />
            <Route path="/movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming Movies" />} />
            <Route path="/search" element={<Search api="search/movie" title="Search Results" />} />
            <Route path="/movie/:id" element={<MovieDetails title="Movie Details" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}