import React, { useEffect, useState } from "react";
import classes from "../Pages.module.css";
import EditTitleForm from "../../UI/EditTitleForm.jsx";
import { getPost } from "../../queries/postQueries";
import ArticleGallery from "./ArticleGallery";
import ArticleDescription from "./ArticleDescription";

const EditArticle = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    const articleTitle = decodeURIComponent(window.location.search.split("?")[1]);
    getPost(articleTitle, 'Article').then((response) => {
      setCurrentArticle(response.post);
      setImageLink(response.post.postImages?.photosLinks[0]);
    });
  }, []);

  return (
    <div className={classes.panel}>
      <div className={classes.panelTop}>
        <h2>{currentArticle.title}</h2>
      </div>
      {currentArticle && Object.keys(currentArticle).length !== 0 ? (
        <div className={classes.panelMain}>
          <ArticleGallery
            imageLink={imageLink}
            currentArticleTitle={currentArticle.title}
          />
          <EditTitleForm
            currentPost={currentArticle}
            postType="Article"
          />
          <ArticleDescription currentArticle={currentArticle} />
        </div>
      ) : null}
    </div>
  );
};

export default EditArticle;
