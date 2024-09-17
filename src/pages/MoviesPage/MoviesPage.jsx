import css from './MoviesPage.module.css'

import { useEffect, useState } from "react";

import { fetchSearchMovies } from '../../services/api';

import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";

import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');

    useEffect(() => {
        if (query === null) return;
        const getUserMovies = async (query) => {
        try {
            const data = await fetchSearchMovies(query);
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    };
        getUserMovies(query);
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userValue = form.elements.userValue.value.trim();
        if (userValue === "") {
            toast.error("Enter a value!", {
                duration: 4000,
                position: "top-right",
            });
        } else setSearchParams({ query: userValue });;
        form.reset();
    };

    return (
        <div className="container">
            <Toaster />
             <form className={css.form} onSubmit={handleSubmit}>
                    <input
                        className={css.input}
                        name='userValue'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                    <button className={css.btn} type="submit">Search</button>
            </form>

            {movies.length > 0 && <MovieList movies={movies}/>}
        </div>
    );
}

export default MoviesPage