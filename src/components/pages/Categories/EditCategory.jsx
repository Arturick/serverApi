import React, { useEffect, useState } from "react";
import { updatePost } from "../../queries/postQueries";
import classes from "../Pages.module.css";
import { getPost } from "../../queries/postQueries";
import EditTitleForm from "../../UI/EditTitleForm.jsx";
import CategoryGallery from "./CategoryGallery";
import CategoryProducts from "./CategoryProducts";
import CategoryFilters from "./CategoryFilters";
import CategoryContext from "./CategoryContext";
import CategoryOrder from "./CategoryOrder";

const EditCategory = () => {
  const [category, setCategory] = useState({});
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    const categoryTitle = decodeURIComponent(
      window.location.search.split("?")[1]
    );

    getPost(categoryTitle, "Category").then((response) => {
      setCategory(response.post);
      setImageLink(response.post.postImages?.photosLinks[0]);
    });
  }, []);

  async function updateCategory(category) {
    await updatePost(category, "Category");
  }  

  return (
    <div className={classes.panel}>
      <div className={classes.panelTop}>
        <h2>{category.title}</h2>
      </div>
      {Object.keys(category).length !== 0 ? (
        <div className={classes.panelMain}>
          <CategoryContext.Provider value={{category, updateCategory}}>
            <CategoryGallery
              imageLink={imageLink}
            />
            <EditTitleForm currentPost={category} postType="Category" />
            <CategoryProducts/>
            <CategoryOrder/>
            <CategoryFilters/>
          </CategoryContext.Provider>
        </div>
      ) : null}
    </div>
  );
};

export default EditCategory;
