import React, {useState} from 'react';
import { userLogin } from '../../queries/userQueires';
import SubmitButton from '../../UI/SubmitButton';

const Auth = () => {
    const [loginInput, setLoginInput] = useState('');
    const [passInput, setPassInput] = useState('');
  
    const login = (ev) => {
        ev.preventDefault();
        userLogin(loginInput, passInput).then(response => {
            localStorage.setItem('token', response.data.token)
            window.location.reload();
        })
    }

    return (
        <div className='auth-container'>
            <form className='auth-form' onSubmit={(ev) => login(ev)}>
                <label>Логин</label>
                <input type="text" onInput={(ev) => setLoginInput(ev.target.value)}/>
                <label>Пароль</label>
                <input type="password" onInput={(ev) => setPassInput(ev.target.value)}/>
                <SubmitButton value="Войти"/>
            </form>
        </div>
    );
}

export default Auth;
