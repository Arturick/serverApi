import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../ProductContext";
import classes from "./ProductDetails.module.css";
import SubmitButton from "../../../UI/SubmitButton";
import { updatePost } from "../../../queries/postQueries";

const ProductDetails = () => {
  const { product } = useContext(ProductContext);
  const [detailName, setDetailName] = useState("");
  const [detailValue, setDetailValue] = useState("");
  const [details, setDetails] = useState(product.details);

  useEffect(() => {
    product.details = details;
    updatePost(product, "Product");

    setDetailName("");
    setDetailValue("");
  }, [details]);

  const deleteDetail = (detail) => {
    setDetails(details.filter((detailItem) => detailItem !== detail));
  };

  const addDetail = (ev) => {
    ev.preventDefault();
    const newDetail = { key: detailName, value: detailValue };

    setDetails(() => [...details, newDetail]);
  };

  return (
    <div>
      <h3>Детали</h3>
      <div className={classes.table}>
        {details
          ? details.map((detail) => (
              <div className={classes.tableItem} key={detail.value}>
                <div className={classes.key}>{detail.key}</div>
                <div className={classes.value}>{detail.value}</div>
                <div className={classes.delete} onClick={() => deleteDetail(detail)}>
                  Удалить
                </div>
              </div>
            ))
          : null}
      </div>
      <form className={classes.addForm} onSubmit={(ev) => addDetail(ev)}>
        <input value={detailName} type="text" placeholder="Ключ" onInput={(ev) => setDetailName(ev.target.value)}/>
        <input value={detailValue} type="text" placeholder="Значение" onInput={(ev) => setDetailValue(ev.target.value)}/>
        <br />
        <SubmitButton value="Добавить" />
      </form>
    </div>
  );
};

export default ProductDetails;
