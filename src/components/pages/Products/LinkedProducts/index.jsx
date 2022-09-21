import React, {useState, useEffect, useContext} from 'react';
import ProductContext from "../ProductContext";
import SubmitButton from '../../../UI/SubmitButton';
import classes from './LinkedProducts.module.css'
import { updatePost } from '../../../queries/postQueries';
import { getPosts } from '../../../queries/postQueries';

const LinkedProducts = () => {
    const {product} = useContext(ProductContext);
    const [products, setProducts] = useState([]);
    const [linkedProducts, setLinkedProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])

    useEffect(() => {
        getPosts('Product').then((response) => {
            setProducts(response.data.posts)
            setLinkedProducts(product.linkedProducts)
            setSelectedProduct(JSON.stringify(response.data.posts[0]))
        })
    }, [])

    const addLinkedProduct = (ev) => {
        ev.preventDefault();

        const selectedProductParsed = JSON.parse(selectedProduct)
        const isThisProduct = linkedProducts.find(product => product.title === selectedProductParsed.title)
        
        if(!isThisProduct){
            setLinkedProducts([...linkedProducts, selectedProductParsed])
            product.linkedProducts = [...linkedProducts, selectedProductParsed];
            updatePost(product, 'Product')
        }
    }

    const deleteLinkedProduct = (productTitle) => {
        setLinkedProducts(linkedProducts.filter(product => product.title !== productTitle))
        product.linkedProducts = linkedProducts.filter(product => product.title !== productTitle);

        updatePost(product, 'Product')
    }

    return (
        <div>
            <h3>Привязанные товары</h3>
            <form className={classes.form} onSubmit={(ev) => addLinkedProduct(ev)}>
                <select onInput={(ev) => setSelectedProduct(ev.target.value)}>
                    {products.map(product => 
                        <option value={JSON.stringify(product)} key={product.title}>{product.title}</option>
                    )}
                </select>
                <SubmitButton value="Добавить"/>
            </form>
            <div>
                {linkedProducts.map(product => 
                    <div key={product.id} className={classes.productItem}>
                        <div>{product.title}</div>
                        <div className={classes.delete} onClick={() => deleteLinkedProduct(product.title)}>Удалить</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LinkedProducts;
