import React, { useState, useEffect } from "react";
import classes from "../../UI/EditForm.module.css";
import SubmitButton from '../../UI/SubmitButton'
import { updatePost } from "../../queries/postQueries";

const ArticleDescription = ({ currentArticle }) => {
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(currentArticle.body)
  }, [currentArticle]);

  const submitArticleChanges = (ev) => {
    ev.preventDefault()
    currentArticle.body = description;
    updatePost(currentArticle, 'Article')
    setIsDescriptionEditing(false)
  }

  return (
    <div>
      <h3 className={classes.title}>
        Описание
        <span onClick={() => setIsDescriptionEditing(true)}>ред...</span>
      </h3>
      {!isDescriptionEditing ? (
        <div className={classes.description}>{description}</div>
      ) : (
        <form onSubmit={(ev) => submitArticleChanges(ev)}>
          <textarea
            className={classes.textarea}
            onInput={(ev) => setDescription(ev.target.value)}
            value={description}
          />
          <SubmitButton value="Сохранить" />
        </form>
      )}
    </div>
  );
};

export default ArticleDescription;
