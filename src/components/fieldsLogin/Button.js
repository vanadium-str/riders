import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { events, URL, isEmailValid } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function Button({name, login, callbackWrongMessage}) {

    const { email, username, phone, pass, passRepeat, setUserId, setAdmin } = useContext(ridersAppContext);

    let navigate = useNavigate();

    const eventsPage = () => {
        navigate(`/${events}`);
    };

    const loginCheck = () => {
        fetch(URL + 'login', {
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
        }else if(username === ''){
            //callbackWrongMessage('username');
            alert('Please add name')
        }else if(phone === ''){
            //callbackWrongMessage('phone');
            alert('Please add phone')
        }else if(!isEmailValid(email)){
            //callbackWrongMessage('mailType');
            alert('Your email is incorrect')
        }else if(pass === passRepeat && pass !== '' && passRepeat !== '' && isEmailValid(email)){
            fetch(URL + 'register', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    name: username,
                    phone: phone,
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