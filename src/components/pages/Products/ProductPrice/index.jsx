import React, {useState, useEffect, useContext} from 'react';
import ProductContext from "../ProductContext";
import classes from './ProductPrice.module.css';
import SubmitButton from '../../../UI/SubmitButton'
import { updatePost } from "../../../queries/postQueries";

const ProductPrice = () => {
    const {product} = useContext(ProductContext);
    const [price, setPrice] = useState(1)
    const [initialPrice, setInitialPrice] = useState(1);
    const [discountPrice, setDiscountPrice] = useState(1);

    useEffect(() => {
        setPrice(product.price)
        setInitialPrice(product.initialPrice)
        setDiscountPrice(product.discountPrice)
    }, [product])

    const savePrices = (ev) => {
        ev.preventDefault();
        product.price = price;
        product.initialPrice = initialPrice;
        product.discountPrice = discountPrice;
        updatePost(product, 'Product');
    }

    return (
        <div>
            <form className={classes.form} onSubmit={(ev) => savePrices(ev)}>
                <label>Стоимость</label>
                <input type="number" onInput={(ev) => setPrice(parseInt(ev.target.value))} value={price || 0}/>
                <label>Себестоимость</label>
                <input type="number" onInput={(ev) => setInitialPrice(parseInt(ev.target.value))} value={initialPrice || 0}/>
                <label>Cтомость по акции</label>
                <input type="number" onInput={(ev) => setDiscountPrice(parseInt(ev.target.value))} value={discountPrice || 0}/>
                <SubmitButton value="Сохранить цены"/>
            </form>
        </div>
    );
}

export default ProductPrice;
