import React, {useContext} from "react";
import ProductContext from "../ProductContext";
import classes from "./ProductGallery.module.css";
import { deletePostImage } from "../../../queries/postQueries";
import UploadForm from "../../../UI/UploadForm";

const ProductGallery = () => {
  const {product} = useContext(ProductContext);

  return (
    <div className={classes.container}>
      {product.postImages.photosLinks ? (
        <div className={classes.gallery}>
          {product.postImages.photosLinks.map((imageLink, index) => (
            <div className={classes.itemWrapper} key={index}>
              <div className={classes.deleteImage} onClick={() => deletePostImage(index, "Product", product.title)}>Удалить</div>
              <div
                className={classes.galleryItem}
                style={{ backgroundImage: `url('${imageLink}')` }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <p>Здесь пока ничего нет...</p>
      )}
      <div className={classes.upload}>
        <h3>Загрузить новое изображение</h3>
        <UploadForm postTitle={product.title} postType="Product"/>
      </div>
    </div>
  );
};

export default ProductGallery;
