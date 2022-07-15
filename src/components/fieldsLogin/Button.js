import React, {useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function Button({name, login, page, callbackWrongMessage}) {

    const {setPage, email, pass, passRepeat, setEventsList} = useContext(ridersAppContext);

    const loginCheck = () => {
        fetch('https://riderrs.herokuapp.com/api/login', {
                method: 'POST',
                body: JSON.stringify({
                email: email,
                password: pass
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status === 1 || data.status === 2){
                    callbackWrongMessage(data.status);
                }else if(data){
                    setEventsList(data);
                    setPage(page);
                }
            })
    }

    const registration = () => {
        if(email === ''){
            callbackWrongMessage(0);
        }else if(pass === passRepeat && pass !== '' && passRepeat !== ''){
            fetch('https://riderrs.herokuapp.com/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: pass
                }),
                    headers: {
                    'Content-Type': 'application/json'
                    }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status === 1){
                    callbackWrongMessage(data.status);
                }else if(data){
                    setPage(page);       
                }

            })
        }
    }

    return (
        <div className='d-flex justify-content-center my-5'>
            <button className='button' onClick={() => {
               login ? loginCheck() : registration();
            }}>
                {name}
            </button>
        </div>
    );
}

export default Button;