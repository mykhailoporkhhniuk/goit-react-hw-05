import { NavLink } from "react-router-dom"

import clsx from "clsx";
import css from "./Navigation.module.css"

const Navigation = () => {
    const activeLinkClass = ({ isActive }) => {
        return clsx(isActive && css.active);
    };
    
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink className={activeLinkClass} to="/">Home</NavLink>
                <NavLink className={activeLinkClass} to="/movies">Movies</NavLink>
            </nav>
        </header>
    );
}

export default Navigation