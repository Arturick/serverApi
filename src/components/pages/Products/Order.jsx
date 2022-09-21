import React, {useState, useContext} from 'react';
import ProductContext from "./ProductContext";
import { updatePost } from "../../queries/postQueries";
import saveIcon from './save.svg';

const Order = () => {
    const {product} = useContext(ProductContext);
    const [order, setOrder] = useState(product.order || 0);

    function save(){
        product.order = order;
        updatePost(product, "Product");
    }

    return (
        <div>
            <h3>Порядковый номер</h3>
            <div className="input-wrapper">
                <input type="number" value={order} onInput={(ev) => setOrder(parseInt(ev.target.value))}/>
                <img src={saveIcon} alt="" onClick={() => save()}/>
            </div>
        </div>
    );
}

export default Order;
