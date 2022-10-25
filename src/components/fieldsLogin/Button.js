import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { events, URL, isEmailValid, matchPhoneCodes } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import { setAdmin, setUserId } from '../../redux/slices/userSlice';
import { userIdSelector } from '../../redux/selectors';

function Button({ name, login, callbackWrongMessage }) {

    const { email, username, phone, pass, passRepeat } = useContext(ridersAppContext);

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector(userIdSelector);

    const loginCheck = () => {
        fetch(URL + 'login', {
                method: 'POST',
                body: JSON.stringify({
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
                if(data.status === 1 || data.status === 2){
                    callbackWrongMessage(data.status);
                }else if(data){
                    //dispatch(setAdmin(data.is_admin));
                    dispatch(setUserId(data.user_id));
                    window.localStorage.setItem('userId', data.user_id);
                    navigate(`/${events}`);
                }
            })
    }

    const registration = () => {
        if(email === ''){
            callbackWrongMessage(0);
        }else if(username === ''){
            alert('Please add name');
        }else if(phone === ''){
            alert('Please add phone');
        }else if(!matchPhoneCodes(phone)){
            alert('Please put correct phone number');
        }else if(!isEmailValid(email)){
            alert('Your email is incorrect');
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
                    //dispatch(setAdmin(data.is_admin));
                    dispatch(setUserId(data.user_id));
                    window.localStorage.setItem('userId', data.user_id);
                    navigate(`/${events}`);    
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