import React from 'react';
import classes from './SubmitButton.module.css'

const SubmitButton = ({value}) => {
    return (
        <input className={classes.button} type="submit" value={value}/>
    );
}

export default SubmitButton;
