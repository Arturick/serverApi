import React, { useState, useEffect } from "react";
import classes from "../Pages.module.css";
import { getPost } from "../../queries/postQueries";
import EditTitleForm from "../../UI/EditTitleForm.jsx";
import EditDescriptionForm from "../../UI/EditDescriptionForm";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import DisplayMain from "./DisplayMain";
import InStock from "./InStock";
import ProductPrice from "./ProductPrice";
import LinkedProducts from "./LinkedProducts";
import ProductCategory from "./ProductCategory";
import ProductContext from "./ProductContext";
import ProductFilters from "./ProductFilters";
import TopSales from "./TopSales";
import Order from './Order';
import Articul from "./Articul";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const productName = decodeURIComponent(window.location.search.split("?")[1]);

  useEffect(() => { //get product and product category
    getPost(productName, "Product").then(response => setProduct(response.post))
  }, []);

  return (
    <div className={classes.panel}>
      <div className={classes.panelTop}>
        <h2>{product.title}</h2>
      </div>
      {Object.keys(product).length !== 0 ? (
        <div className={classes.panelMain}>
          <h3 className={classes.sectionTitle}>Галерея</h3>
          
          <ProductContext.Provider value={{product}}>
            <ProductGallery/>
            <EditTitleForm currentPost={product} postType="Product" />
            <hr />
            <EditDescriptionForm currentProduct={product} />
            <Order/>
            <Articul/>
            <ProductCategory/>
            <ProductFilters/>
            <ProductDetails/>
            <DisplayMain/>
            <br />
            <InStock/>
            <br />
            <TopSales/>
            <ProductPrice/>
            <LinkedProducts/>
          </ProductContext.Provider>
        </div>
      ) : (
        <h2>загрузка...</h2>
      )}
    </div>
  );
};

export default EditProduct;
