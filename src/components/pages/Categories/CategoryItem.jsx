import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../Pages.module.css';
import { deletePost } from '../../queries/postQueries';

const CategoryItem = ({title}) => {
    return (
        <div className={classes.item} key={title}>
            <div>{title}</div>
            <div>
                <span className={classes.delete} onClick={() => deletePost(title, 'Category')}>Удалить</span>
                <Link to={`/editCategory?${title}`}>Редактировать...</Link>
            </div>
        </div>  
    );
}

export default CategoryItem;
