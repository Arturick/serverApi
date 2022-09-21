import React, { useState, useEffect } from "react";
import classes from "./AddProductForm.module.css";
import { createPost } from "../../../queries/postQueries";

const AddProductForm = ({ categories }) => { //accepts all categories
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(""); //controls switch selected option
  const [displayMain, setDisplayMain] = useState(false);
  const [price, setPrice] = useState(0);
  const [initialPrice, setInitialPrice] = useState(0);

  useEffect(() => {
    categories.length !== 0 //if at least one category exist set selected switch option as first category title from all categories
      ? setCategory(categories[0].title)
      : setCategory("");
  }, [categories]);

  const createNewPost = (ev) => {
    ev.preventDefault();

    createPost(title, "Product", { //server query to create new product
      category, //selected from switch category
      displayMain,
      price,
      initialPrice,
    });
  };

  return (
    <form className={classes.form} onSubmit={(ev) => createNewPost(ev)}>
      <label>Название товара</label>
      <input type="text" onInput={(ev) => setTitle(ev.target.value)} />
      <label>Категория товара</label>
      <select onChange={(ev) => setCategory(ev.target.value)}>
        {categories.map((categoryItem) => (
          <option value={categoryItem.title} key={categoryItem.title}>
            {categoryItem.title}
          </option>
        ))}
      </select>
      <label>Отображать на главной</label>
      <input
        type="checkbox"
        className={classes.checkbox}
        onChange={() => setDisplayMain(!displayMain)}
      />
      <label>Стоимость</label>
      <input
        type="text"
        onInput={(ev) => setPrice(parseInt(ev.target.value))}
      />
      <label>Себестоимость</label>
      <input
        type="text"
        onInput={(ev) => setInitialPrice(parseInt(ev.target.value))}
      />
      <input type="submit" value="Добавить товар" />
    </form>
  );
};

export default AddProductForm;
