import React, { useState, useEffect } from 'react';
import classes from '../Pages.module.css';
import Modal from '../../UI/Modal/Modal.jsx';
import AddPost from '../../postComponents/AddPost';
import CategoryItem from './CategoryItem.jsx';
import {getPosts} from "../../queries/postQueries";

const Categories = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getPosts('Category')
            .then(response => setCategories(response.data.posts))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <div className={classes.panel}>
            <div className={classes.panelTop}>
                <h2>Категории</h2> <div className={classes.createCategoryBtn} onClick={() => setModalOpened(true)}>Создать категорию</div>
            </div>
            <div className={classes.panelMain}>
                {categories.length === 0 ? <p>Категорий еще нет...</p> : ''}
                {categories.map(category => 
                    <CategoryItem title={category.title} key={category.title}/>   
                )}
            </div>

            <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
                <AddPost postType="Category"/>
            </Modal>
        </div>
    );
}

export default Categories;
