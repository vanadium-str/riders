import React, { useState } from 'react';
import InputSignIn from '../fieldsLogin/InputSignIn';
import Button from '../fieldsLogin/Button';
import SocialMedia from './SocialMedia';
import Header from './Header';
import { useSelector } from 'react-redux';
import { userPassRepeatSelector, userPassSelector } from '../../redux/selectors';

function Registration() {

    const [wrong, setWrong] = useState(false);
    const [wrongGreen, setWrongGreen] = useState(false);
    const [wrongMessage, setWrongMessage] = useState('');

    const pass = useSelector(userPassSelector);
    const passRepeat = useSelector(userPassRepeatSelector);

    const setWrongPass = () => {
        if(pass !== '' && passRepeat !== '' && pass !== passRepeat){
            return true
        }
    }

    const setWrongName = () => {
        setWrongMessage('שדה חובה');
        return true;
    }

    const callbackWrongMessage = (message) => {
        if(message === 0){
            setWrongMessage('שדה חובה');
            setWrong(true);
        }else if(message === 1){
            setWrongMessage('משתמש עם המייל הזה כבר נרשם באפליקציה');
            setWrongGreen(true);
            setWrong(true);
        }
    }

    return (
        <div className='container my-3'>
            <Header name={'הרשמה'} back={true}/>
            <div className='row mt-4'>
                <InputSignIn placeholder={'מייל'} type={'email'} content={'email'} green={wrongGreen} wrong={wrong} wrongMessage={wrongMessage}/>
                <InputSignIn placeholder={'טלפון'} type={'number'} content={'phone'}/>
                <InputSignIn placeholder={'שם פרטי'} type={'text'} content={'name'}/>
                <InputSignIn placeholder={'סיסמה'} type={'password'} content={'firstPass'} wrong={setWrongPass()}/>
                <InputSignIn placeholder={'הזנה'} type={'password'} content={'secondPass'} wrong={setWrongPass()} wrongMessage={'הזנה שגויה'}/>
                <Button name={'הרשמה'} login={false} callbackWrongMessage={callbackWrongMessage}/>
            </div>
        </div>
    );
}

export default Registration;