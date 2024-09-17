import css from './NotFoundPage.module.css'

import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container">
            <h2 className={css.title}>Page not found</h2>
            <Link to='/'>
                <button className={css.button}>Go to the main page</button>
            </Link>
        </div>
    );
}

export default NotFoundPage