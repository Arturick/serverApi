import React, { useState, useEffect } from "react";
import classes from "../Pages.module.css";
import bannerClasses from "./Banners.module.css";
import { getPost, deletePostImage } from "../../queries/postQueries";
import UploadForm from "../../UI/UploadForm";

const Banners = () => {
  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    getPost("Main", "Banner").then(response => {
      setImageLinks(response.post.postImages.photosLinks)
    });
  }, []);

  return (
    <div className={classes.panel}>
      <div className={classes.panelTop}>
        <h2>Баннеры</h2>
      </div>
      <div className={classes.panelMain}>
        <div className={bannerClasses.container}>
          <div className={bannerClasses.gallery}>
            {imageLinks ? (
              imageLinks.map((link, index) => (
                <div className={bannerClasses.itemWrapper} key={index}>
                  <div className={bannerClasses.deleteImage} onClick={() => deletePostImage(index, "Banner", "Main")}>Удалить</div>
                  <div
                    className={bannerClasses.galleryItem}
                    style={{ backgroundImage: `url('${link}')` }}
                  ></div>
                </div>
              ))
            ) : (
              <b>Нет изображений</b>
            )}
          </div>

          <div className={classes.upload}>
            <h3>Загрузить новое изображение</h3>
            <UploadForm postTitle="Main" postType="Banner"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
