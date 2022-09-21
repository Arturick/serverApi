import React from "react";
import classes from "./ArticleGallery.module.css";
import UploadForm from "../../../UI/UploadForm";

const ArticleGallery = ({ currentArticleTitle, imageLink }) => {
  return (
    <React.Fragment>
      <h3>Изображение</h3>
      <div
        className={classes.gallery}
        style={{ backgroundImage: `url('${imageLink}')` }}
      >
         <UploadForm postTitle={currentArticleTitle} postType="Article"/>
      </div>
    </React.Fragment>
  );
};

export default ArticleGallery;
