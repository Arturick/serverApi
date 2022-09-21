import React, { useState, useEffect } from "react";
import classes from "../Pages.module.css";
import { getPosts } from "../../queries/postQueries"; 
import AddPost from '../../postComponents/AddPost';
import Modal from "../../UI/Modal/Modal";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    getPosts('Article').then((response) => setArticles(response.data.posts));
  }, []);

  return (
    <div className={classes.panel}>
      <div className={classes.panelTop}>
        <h2>Статьи</h2>
        <div className={classes.createCategoryBtn} onClick={() => setModalOpened(true)}> Создать статью</div>
      </div>
      <div className={classes.panelMain}>
        {articles.length === 0 ? <p>Статей еще нет...</p> : ''}
        {articles.map(article => 
            <ArticleItem title={article.title} key={article.title}/>
        )}
      </div>
      <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
        <AddPost postType="Article"/>
      </Modal>
    </div>
  );
};

export default Articles;
