import React, { useContext, useState } from 'react';
import { ridersAppContext } from '../../utils/context';
import InputMessage from '../fieldsLogin/InputMessage';

function InputChangePass({ name, content, callbackSetPass, wrong, wrongMessage }) {

    const { userId, userData, setUserData, setPageEvent } = useContext(ridersAppContext);

    const [showPass, setShowPass] = useState(false);
    
    return (
        <div className='inputSize position-relative mb-4'>
            <div className={`passwordView ${showPass ?'view' : ''}`} onClick={() => {
                    showPass ? setShowPass(false) : setShowPass(true);
            }}/>
            <input className={`inputSignIn text-end ltr ${wrong ? 'inputWrong' : ''}`} type={showPass? 'text' : 'password'} placeholder={name} onChange={(event) => {
               callbackSetPass(content, event.target.value);
            }}/>
            {wrong ? <InputMessage wrongMessage={wrongMessage}/> : <></>}
        </div>
    );
}
    
export default InputChangePass;