import React, { useState, useContext, useEffect } from 'react';
import ProductContext from "../ProductContext";
import classes from './ProductFilters.module.css';
import { getPost, updatePost } from '../../../queries/postQueries';

const ProductFilters = () => {
    const {product} = useContext(ProductContext);
    const [category, setCategory] = useState('');
    const [selectedFilters, setSelectedFilters] = useState(product.filters || []);
 
    useEffect(() => {
        getPost(product.category, 'Category')
            .then(response => setCategory(response.post));
    }, [])

    useEffect(() => {
        product.filters = selectedFilters;
        updatePost(product, 'Product');
    }, [selectedFilters])

    function changeFilters(filter){
        if(isFilterInProduct(filter)){
            setSelectedFilters(selectedFilters.filter(selectedFilter => selectedFilter !== filter));
            return;
        }
            
        setSelectedFilters([...selectedFilters, filter]);
    }

    const isFilterInProduct = (filter) => {
        const test = selectedFilters.find(selectedFilter => selectedFilter === filter);
        return test ? true : false;
    }
       
    return (
        <div>
            {category?.filters?.map(filter => 
                <div key={filter.title} className={classes.filtersList}>
                    <h4>{filter.title}</h4>
                    <ul>
                    { filter.subfilters.map(subfilter => <li key={subfilter}>{subfilter} <input type="checkbox" value={isFilterInProduct(subfilter)} checked={isFilterInProduct(subfilter)} onChange={() => changeFilters(subfilter)}/></li>)  }
                    </ul>
                   
                </div>
            )}
            <h3>Фильтры</h3>

        </div>
    );
}

export default ProductFilters;
