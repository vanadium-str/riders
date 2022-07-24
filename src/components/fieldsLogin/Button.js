import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { events } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function Button({name, login, callbackWrongMessage}) {

    const { email, pass, passRepeat, setUserId, setAdmin } = useContext(ridersAppContext);

    let navigate = useNavigate();

    const eventsPage = () => {
        navigate(`/${events}`);
    };

    const loginCheck = () => {
        fetch('http://81.28.7.100/api/login', {
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
                    setUserId(data.user_id);
                    eventsPage();
                }
            })
    }

    const registration = () => {
        if(email === ''){
            callbackWrongMessage(0);
        }else if(pass === passRepeat && pass !== '' && passRepeat !== ''){
            fetch('http://81.28.7.100/api/register', {
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
                    setUserId(data.user_id);
                   // setAdmin(data.is_admin);
                    eventsPage();    
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