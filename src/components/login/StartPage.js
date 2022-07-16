import React, {useContext, useState} from 'react';
import { events, registration } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import InputSignIn from '../fieldsLogin/InputSignIn';
import Button from '../fieldsLogin/Button';
import SocialMedia from './SocialMedia';
import Header from './Header';

function StartPage() {

    const { setPage, setPass } = useContext(ridersAppContext);

    const [wrongMail, setWrongMail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);
    const [wrongMessage, setWrongMessage] = useState('');

    const callbackWrongMessage = (message) => {
        if(message === 1){
            setWrongPass(false);
            setWrongMessage('המייל הזה לא נרשמ באפליקציה');
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
            <div className='row mt-5'>
                <InputSignIn placeholder={'מייל'} type={'text'} content={'email'} wrong={wrongMail} wrongMessage={wrongMessage}/>
                <InputSignIn placeholder={'סיסמה'}  type={'password'} content={'pass'} wrong={wrongPass} wrongMessage={wrongMessage}/>
                <Button name={'כניסה'} login={true} page={events} callbackWrongMessage={callbackWrongMessage}/>
            </div>
            <SocialMedia/>
            <div className='text-end colorBlue cursor mt-4 pe-3' onClick={() => {
                setPass('');
                setPage(registration);
            }}>
                להרשמה
            </div>
        </div>
    );
}

export default StartPage;