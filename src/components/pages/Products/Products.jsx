import React, {useEffect, useState} from "react";
import Modal from "../../UI/Modal/Modal.jsx";
import classes from "../Pages.module.css";
import AddProductForm from "./AddProductForm";
import ProductItem from "./ProductItem.jsx";
import {getPosts} from "../../queries/postQueries";

const Products = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getPosts('Product')
          .then(response => setProducts(response.data.posts))
          .catch(err => console.error(err))

      getPosts('Category')
          .then(response => setCategories(response.data.posts))
          .catch(err => console.error(err))
  }, [])

  return (
    <div className={classes.panel}>
      <div className={classes.panelTop}>
        <h2>Товары</h2>
        <div
          className={classes.createCategoryBtn}
          onClick={() => setModalOpened(true)}
        >
          Добавить товар
        </div>
      </div>
      <div className={classes.panelMain}>
        {products.length === 0 ? <p>Товаров еще нет...</p> : ""}
        {products.map((product) => (
          <ProductItem title={product.title} key={product.title} />
        ))}
      </div>

      <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
        <AddProductForm categories={categories} />
      </Modal>
    </div>
  );
};

export default Products;
