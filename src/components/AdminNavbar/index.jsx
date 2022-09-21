import React from 'react';
import classes from './AdminNavbar.module.css';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.logo}><img src="img/logo.svg" alt=""/></div>
            <div className={classes.links}>
                {/* Routes in AdminPanel components */}
                <Link to="/categories">Категории</Link>
                <Link to="/products">Товары</Link>
                <Link to="/articles">Статьи</Link>
                <Link to="/promo">Промокоды</Link>
                <Link to="/banners">Баннеры</Link>
            </div>
        </div>
    );
}

export default AdminNavbar;
