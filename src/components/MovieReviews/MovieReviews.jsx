import css from './MovieReviews.module.css'

import { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { fetchMoviesReviews } from '../../services/api';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchMoviesReviews(movieId);
                setReviews(data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getReviews();
    }, [movieId]);
    console.log(reviews);
    return (
        <div>
            {reviews && reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
            {reviews &&
                <ul className={css.list}>
                {reviews.map(review => (
                    <li key={review.id} className={css.listItem}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
                </ul>
            }
        </div>
    );
}

export default MovieReviews