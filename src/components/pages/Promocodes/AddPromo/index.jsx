import React, {useState} from 'react';
import classes from './AddPromo.module.css'
import SubmitButton from '../../../UI/SubmitButton'
import { createPost } from '../../../queries/postQueries';

const AddPromo = () => {
    const [promocode, setPromocode] = useState('');
    const [percent, setPercent] = useState(1);

    const addPromo = (ev) => {
        ev.preventDefault();
        createPost({promocode, percent}, 'Promo')
    }

    return (
        <form className={classes.form} onSubmit={(ev) => addPromo(ev)}>
            <label>Промокод</label>
            <input type="text" onInput={(ev) => setPromocode(ev.target.value)}/>
            <label>Процент скидки</label>
            <input type="number" onInput={(ev) => setPercent(ev.target.value)}/>
            <SubmitButton/>
        </form>
    );
}

export default AddPromo;
