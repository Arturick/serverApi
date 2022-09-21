import React, { useState, useEffect } from "react";
import classes from "./EditForm.module.css";
import SubmitButton from "./SubmitButton";
import { updatePost } from "../queries/postQueries";

const EditDescriptionForm = ({ currentProduct }) => {
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(currentProduct.description);
  }, [currentProduct]);

  const changeProductDescription = (ev) => {
    ev.preventDefault();
    currentProduct.description = description;
    updatePost(currentProduct, 'Product');
    setIsDescriptionEditing(false)
  };

  return (
    <div>
      <h3 className={classes.title}>
        Описание
        <span onClick={() => setIsDescriptionEditing(true)}>ред...</span>
      </h3>
      {!isDescriptionEditing ? (
        <div className={classes.description}>{description}</div>
      ) : (
        <form onSubmit={(ev) => changeProductDescription(ev)}>
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

export default EditDescriptionForm;
