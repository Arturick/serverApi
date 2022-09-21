import React, {useContext} from "react";
import CategoryContext from "../CategoryContext";
import classes from "./CategoryGallery.module.css";
import UploadForm from "../../../UI/UploadForm";

const CategoryGallery = ({ imageLink }) => {
  const {category} = useContext(CategoryContext);

  return (
    <div
      className={classes.gallery}
      style={{ backgroundImage: `url('${imageLink}')` }}
    >
      <UploadForm postTitle={category.title} postType="Category"/>
    </div>
  );
};

export default CategoryGallery;
