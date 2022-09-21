import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../Pages.module.css';
import { deletePost } from '../../queries/postQueries.js';

const ArticleItem = ({title}) => {
    return (
        <div className={classes.item}>
            <div>{title}</div>
            <div>
                <span className={classes.delete} onClick={() => deletePost(title, 'Article')}>Удалить</span>
                <Link to={`/editArticle?${title}`}>Редактировать...</Link>
            </div>
        </div>
    );
}

export default ArticleItem;
