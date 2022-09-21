import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../Pages.module.css';
import { deletePost } from '../../queries/postQueries';

const ProductItem = ({title}) => {
    return (
        <div className={classes.item} key={title}>
            <div>{title}</div>
            <div>
                <span className={classes.delete} onClick={() => deletePost(title, 'Product')}>Удалить</span> 
                <Link to={`/editProduct?${title}`}>Редактировать...</Link>
            </div>
        </div>  
    );
}

export default ProductItem;
