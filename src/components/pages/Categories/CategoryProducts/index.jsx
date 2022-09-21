import React, {useState, useEffect, useContext} from 'react';
import CategoryContext from "../CategoryContext";
import classes from './CategoryProducts.module.css'
import {deleteProductFromCategory} from '../../../queries/postQueries'

const CategoryProducts = () => {
    const {category} = useContext(CategoryContext);
    const [categoryProductNames, setCategoryProductNames] = useState([])

    useEffect(() => { 
        const productNames = Array.from(category.categoryProducts, productObject => productObject.product.title);
        setCategoryProductNames(productNames)
    }, [category.products])

    return (
        <div>
            <h3>Привязанные товары</h3>
            
            {categoryProductNames ? categoryProductNames.map(productName => 
                <div className={classes.productItem} key={productName}>
                    <div className={classes.productItemName}>{productName}</div>
                    <div className={classes.delete} onClick={() => deleteProductFromCategory(category.title, productName)}>Удалить</div>
                </div>    
            ) : null}
        </div>
    );
}

export default CategoryProducts;
