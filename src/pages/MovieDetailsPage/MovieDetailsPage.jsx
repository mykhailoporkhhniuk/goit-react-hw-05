import css from './MovieDetailsPage.module.css'

import { useState, useEffect, useRef } from "react";

import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import { fetchMoviesDetails } from '../../services/api'

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMoviesDetails(movieId);
                console.log(data);
                setMovie(data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovieDetails();
    }, [movieId]);

    return (
        <div className="container">
            <div className={css.detailsWrapper}>
                <Link to={backLink.current} >
                    <button className={css.back}>Go back</button>
                </Link>
                <div className={css.movieDetails}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt={movie?.title} width={200} />
                    <div className={css.info}>
                        <h2>
                            {movie?.title}
                        </h2>
                        <p>
                            User Score: {movie?.vote_average}
                        </p>
                        <h3>
                            Overview
                        </h3>
                        <p>
                            {movie?.overview}
                        </p>
                        <h3>
                            Genres
                        </h3>
                        <p>
                            {movie?.genres.map(genre => genre.name).join(', ')}
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.addInfo}>
                <h3 className={css.infoTitle}>Additional information:</h3>
                <ul className={css.linkList}>
                    <li>
                        <Link className={css.link} to={"cast"}>Cast</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={"reviews"}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MovieDetailsPage