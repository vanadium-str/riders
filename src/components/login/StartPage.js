import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { registration } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import InputSignIn from '../fieldsLogin/InputSignIn';
import Button from '../fieldsLogin/Button';
import SocialMedia from './SocialMedia';
import Header from './Header';

function StartPage() {

    const { setPass } = useContext(ridersAppContext);

    const [wrongMail, setWrongMail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);
    const [wrongMessage, setWrongMessage] = useState('');

    const callbackWrongMessage = (message) => {
        if(message === 1){
            setWrongPass(false);
            setWrongMessage('הטלפון הזה לא נרשמ באפליקציה');
            setWrongMail(true);
        }else if(message === 2){
            setWrongMail(false);
            setWrongMessage('סיסמה שגויה');
            setWrongPass(true);
        }
    }

    return (
        <div className='container my-3'>
            <Header name={'כניסה'} back={false}/>
            <div className='text-end mt-3 me-4 textLarge'>
                <Link to={`/${registration}`} className='colorBlue cursor' onClick={() => {
                    setPass('');
                }}>
                    להרשמה
                </Link>
            </div>
            <div className='row mt-5'>
                <InputSignIn placeholder={'טלפון'} type={'number'} content={'phone'} wrong={wrongMail} wrongMessage={wrongMessage}/>
                <InputSignIn placeholder={'סיסמה'}  type={'password'} content={'pass'} wrong={wrongPass} wrongMessage={wrongMessage}/>              
                <Button name={'כניסה'} login={true} callbackWrongMessage={callbackWrongMessage}/>
            </div>
        </div>
    );
}

export default StartPage;