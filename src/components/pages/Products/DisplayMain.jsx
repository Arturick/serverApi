import React, {useState, useEffect, useContext} from "react";
import ProductContext from "./ProductContext";
import Checkbox from "../../UI/Checkbox";
import { updatePost } from "../../queries/postQueries";

const DisplayMain = () => {
  const {product} = useContext(ProductContext);
  const [displayMain, setDisplayMain] = useState(product.displayMain)

  useEffect(() => {
    product.displayMain = displayMain;
    updatePost(product, 'Product');
  }, [displayMain])

  return (
    <div>
      <b>Отображать на главной</b>
      <Checkbox id="displayMainSwitch" setStateFunc={setDisplayMain} defaultState={product.displayMain}/>
    </div>
  );
};

export default DisplayMain;

    
  