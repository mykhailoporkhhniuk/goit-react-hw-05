import css from './MovieCast.module.css'

import { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { fetchMoviesCredits } from '../../services/api';

const MovieCast = () => {
    const { movieId } = useParams();

    const [cast, setCast] = useState(null);

    useEffect(() => {
        const getCast = async () => {
            try { 
                const data = await fetchMoviesCredits(movieId);
                setCast(data.cast);
            } catch (err) {
                console.log(err);
            }
        };
        getCast();
    }, [movieId]);
    console.log(cast);
    return (
        <ul className={css.list}>
            {cast && cast.map(actor => (
                <li key={actor.id} className={css.listItem}>
                    <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={`${actor.name} avatar`}
                        width="100"
                    />
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </li>
            ))}
        </ul>
    );
}

export default MovieCast