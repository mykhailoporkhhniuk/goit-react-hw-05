import css from './MovieList.module.css'

import { Link, useLocation } from "react-router-dom"

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={css.list}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link 
                        state={{ from: location }}
                        className={css.link}
                        to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default MovieList