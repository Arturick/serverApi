import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../ProductContext";
import { getPosts } from "../../../queries/postQueries";
import { changeProductCategory } from "../../../queries/postQueries";

const ProductCategory = () => {
  const {product} = useContext(ProductContext);
  const [categories, setCategories] = useState([]); //all categories
  const [selectedCategory, setSelectedCategory] = useState(product.category); //state that conrols switch
  const [isLoading, setIsLoading] = useState(false); //loading state

  useEffect(() => {
    getPosts('Category').then(response => { //get all categories 
      setCategories(response.data.posts); //and set it to state
    })
  }, []);

  const updateSelectedCategory = async (selectedCategoryTitle) => {
    setSelectedCategory(selectedCategoryTitle);

    setIsLoading(true)
    await changeProductCategory(product.title, selectedCategoryTitle) //server query to update selected category and add current product to it
    setIsLoading(false)
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Категория</h3>
      {isLoading ? <h3>Обновление...</h3> : null}
      <select
        style={{ marginBottom: "20px" }}
        value={selectedCategory}
        onChange={(ev) => updateSelectedCategory(ev.target.value)}
      >
        {categories
          ? categories.map((category) => (
              <option value={category.title} key={category.title}>
                {category.title}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default ProductCategory;
