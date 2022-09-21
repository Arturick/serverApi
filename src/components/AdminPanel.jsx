import React from 'react';
import AdminNavbar from './AdminNavbar';
import {Routes, Route} from 'react-router-dom';

/* page imports */
import StartPage from './pages/StartPage'
import Articles from './pages/Articles/Articles.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Products from './pages/Products/Products.jsx'
import Promocodes from './pages/Promocodes/Promocodes'
import EditCategory from './pages/Categories/EditCategory'
import EditProduct from './pages/Products/EditProduct'
import EditArticle from './pages/Articles/EditArticle'
import Banners from './pages/Banners'
/* /page imports */


const AdminPanel = () => {
    return (
        <div className='admin-panel'>
            <AdminNavbar/>
         
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/editCategory" element={<EditCategory/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/editProduct" element={<EditProduct/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/editArticle" element={<EditArticle/>}/>
                <Route path="/promo" element={<Promocodes/>}/>
                <Route path="/banners" element={<Banners/>}/>
            </Routes>
        </div>
    );
}

export default AdminPanel;
