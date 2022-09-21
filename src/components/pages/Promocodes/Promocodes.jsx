import React, {useState, useEffect} from 'react';
import classes from "../Pages.module.css";
import AddPromo from './AddPromo';
import Modal from "../../UI/Modal/Modal";
import { deletePost, getPosts } from '../../queries/postQueries';

const Promocodes = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [promos, setPromos] = useState([])

    useEffect(() => {
        getPosts('Promo')
            .then(res => setPromos(res.data.posts))
    }, [])

    return (
        <div className={classes.panel}>
           <div className={classes.panelTop}>
                <h2>Промокоды</h2>
                <div className={classes.createCategoryBtn} onClick={() => setModalOpened(true)}> Создать промокод</div>
            </div>
            <div className={classes.panelMain}>
                {promos.length === 0 ? <p>Промокодов еще нет...</p> : null}
                {promos.map(promo => 
                    <div className={classes.item} key={promo.promocode}>
                        <div>
                            Промокод: <b>{promo.promocode}</b> <br />
                            Процент скидки: <b>{promo.percent}</b>
                        </div>
                        <div className={classes.delete} onClick={() => deletePost(promo.promocode, 'Promo')}>Удалить</div>
                    </div>
                )}
               
            </div>
            <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
                <AddPromo/>
            </Modal>
        </div>
    );
}

export default Promocodes;
