import React, {useState, useEffect, useContext} from "react";
import ProductContext from "./ProductContext";
import Checkbox from "../../UI/Checkbox";
import { updatePost } from "../../queries/postQueries";

const InStock = () => {
  const {product} = useContext(ProductContext);
  const [inStock, setInStock] = useState(product.inStock)
  
  useEffect(() => {
    product.inStock = inStock;
    updatePost(product, 'Product');
  }, [inStock])

  return (
    <div>
      <b>В наличии</b>
      <Checkbox id="inStockSwitch" setStateFunc={setInStock} defaultState={product.inStock}/>
    </div>
  );
};

export default InStock;
