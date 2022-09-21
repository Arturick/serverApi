import React, {useState, useEffect} from 'react';
import classes from './Checkbox.module.css';

const Checkbox = ({defaultState, id, setStateFunc}) => {
    const [checked, setChecked] = useState(defaultState)

    const changeState = () => {
        setChecked(!checked)
        setStateFunc(!checked)
    }

    return (
        <div className={classes.cbContainer}>
            <input
              type="checkbox"
              id={id}
              checked={checked}
              onChange={() => changeState()}
            />
            <label htmlFor={id}>Toggle</label>
        </div>
    );
}

export default Checkbox;
