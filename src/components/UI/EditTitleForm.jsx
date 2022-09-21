import React, { useState } from "react";
import classes from "./EditForm.module.css";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../queries/postQueries";

const EditTitleForm = ({ currentPost, postType }) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  const changeTitle = async (ev) => {
    ev.preventDefault();
    currentPost.title = newTitle;
    await updatePost(currentPost, postType);
  
    switch (postType) {
      case 'Category':
        navigate(`/editCategory?${newTitle}`);
        break;
      case 'Product':
        navigate(`/editProduct?${newTitle}`);
        break;
      case 'Article':
        navigate(`/editArticle?${newTitle}`);
        break;
      default:
        break;
    }

    window.location.reload();
  }

  return (
    <div>
      {!isTitleEditing ? (
        <h2 className={classes.title}>
          {currentPost.title}
          <span onClick={() => setIsTitleEditing(true)}> ред..</span>
        </h2>
      ) : (
        <form
          className={classes.editForm}
          onSubmit={(ev) => changeTitle(ev)}
        >
          <input
            type="text"
            placeholder="Введите название категории"
            onInput={(ev) => setNewTitle(ev.target.value)}
          />
          <input type="submit" value="Сохранить" />
        </form>
      )}
    </div>
  );
};

export default EditTitleForm;
