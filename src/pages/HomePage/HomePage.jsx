import css from './HomePage.module.css'

import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";

import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data);
            } catch (err) {
                console.log(err);
            }
        };
        getTrendingMovies();
    }, []);
    return (
        <div className="container">
            <h2 className={css.title}>Trending today</h2>
            <MovieList movies={movies}/>
        </div>
    );
}

export default HomePage