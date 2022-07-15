import React, {useContext, useEffect, useState} from 'react';
import { ridersAppContext } from '../../utils/context';
import InputSignIn from '../fieldsLogin/InputSignIn';
import Button from '../fieldsLogin/Button';
import SocialMedia from './SocialMedia';
import Header from './Header';

function Registration() {

    const {pass, passRepeat} = useContext(ridersAppContext);

    const [wrong, setWrong] = useState(false);
    const [wrongGreen, setWrongGreen] = useState(false);
    const [wrongMessage, setWrongMessage] = useState('');

    const setWrongInput = () => {
        if(pass !== '' && passRepeat !== '' && pass !== passRepeat){
            return true
        }
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
            <div className='row mt-5'>
                <InputSignIn placeholder={'מייל'} type={'text'} content={'email'} green={wrongGreen} wrong={wrong} wrongMessage={wrongMessage}/>
                <InputSignIn placeholder={'סיסמה'} type={'password'} content={'firstPass'} wrong={setWrongInput()}/>
                <InputSignIn placeholder={'הזנה'} type={'password'} content={'secondPass'} wrong={setWrongInput()} wrongMessage={'הזנה שגויה'}/>
                <Button name={'הרשמה'} login={false} page={''} callbackWrongMessage={callbackWrongMessage}/>
            </div>
            <SocialMedia/>
        </div>
    );
}

export default Registration;