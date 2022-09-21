import React, { useState } from "react";
import classes from "./UploadForm.module.css";
import { API_URL } from "../../../config";
import SubmitButton from "../SubmitButton";

const UploadForm = ({postTitle, postType}) => {
  const [imageUploaded, setImageUploaded] = useState(false);

  return (
    <form
      className={classes.addingForm}
      method="post"
      action={`${API_URL}/uploadPostImage?postTitle=${postTitle}&postType=${postType}`}
      encType="multipart/form-data"
    >
      <input
        type="file"
        id="postImage"
        name="postImage"
        onInput={() => setImageUploaded(true)}
      />
      {imageUploaded ? <SubmitButton/> : ""}
    </form>
  );
};

export default UploadForm;
