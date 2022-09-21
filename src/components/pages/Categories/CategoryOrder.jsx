import React, {useState, useContext} from 'react';
import CategoryContext from "./CategoryContext";
import { updatePost } from "../../queries/postQueries";

const CategoryOrder = () => {
    const {category} = useContext(CategoryContext);
    const [order, setOrder] = useState(category.order || 0);

    function save(){
        console.log(category)
        category.order = order;
        updatePost(category, "Category");
    }

    return (
        <div>
            <h3>Порядковый номер</h3>
            <div className="input-wrapper">
                <input type="number" value={order} onInput={(ev) => setOrder(parseInt(ev.target.value))}/>
                <div onClick={() => save()} style={{cursor: 'pointer'}}>Сохранить</div>
            </div>
        </div>
    );
}

export default CategoryOrder;
