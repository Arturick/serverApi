import React, {useState, useEffect, useContext} from "react";
import ProductContext from "./ProductContext";
import Checkbox from "../../UI/Checkbox";
import { updatePost } from "../../queries/postQueries";

const TopSales = () => {
  const {product} = useContext(ProductContext);
  const [topSales, setTopSales] = useState(product.topSales)

  useEffect(() => {
    product.topSales = topSales;
    updatePost(product, 'Product');
  }, [topSales])

  return (
    <div>
      <b>Топ продаж</b>
      <Checkbox id="topSalesSwitch" setStateFunc={setTopSales} defaultState={product.topSales}/>
    </div>
  );
};

export default TopSales;

    
  