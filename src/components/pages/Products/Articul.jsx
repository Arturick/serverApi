import React, {useState, useContext} from 'react';
import ProductContext from "./ProductContext";
import { updatePost } from "../../queries/postQueries";
import saveIcon from './save.svg';

const Articul = () => {
    const {product} = useContext(ProductContext);
    const [artucul, setArticul] = useState(product.articul || 0);

    function save(){
        product.articul = artucul;
        updatePost(product, "Product");
    }

    return (
        <div>
            <h3>Артикул</h3>
            <div className="input-wrapper">
                <input type="number" value={artucul} onInput={(ev) => setArticul(parseInt(ev.target.value))}/>
                <img src={saveIcon} alt="" onClick={() => save()}/>
            </div>
        </div>
    );
}

export default Articul;
