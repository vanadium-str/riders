import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail, setPass, setPassRepeat, setPhone, setUsername } from '../../redux/slices/userSlice';
import InputMessage from './InputMessage';

function InputSignIn({ placeholder, type, content, wrong, wrongMessage, green }) {

    const [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();

    const typeDefinition = (event) => {
        if(content === 'firstPass' || content === 'pass'){
            dispatch(setPass(event));
        }else if(content === 'secondPass'){
            dispatch(setPassRepeat(event));
        }else if(content === 'email'){
            dispatch(setEmail(event));
        }else if(content === 'name'){
            dispatch(setUsername(event));
        }else if(content === 'phone'){
            dispatch(setPhone(event));
        }
    }

    return (
        <div className='col-12 d-flex align-items-center flex-column heightInput'>
            <div className='inputSize position-relative'>
                {type === 'password' ? 
                    <div className={`passwordView ${showPass ?'view' : ''}`} onClick={() => {
                        showPass ? setShowPass(false) : setShowPass(true);
                    }}/>
                : <></>}
                <input className={`inputSignIn ${wrong ? 'inputWrong' : ''}`} placeholder={placeholder} type={showPass? 'text' : type} onChange={(event) => {
                    typeDefinition(event.target.value)
                }}/>
                {wrong ? <InputMessage wrongMessage={wrongMessage} green={green}/> : <></>}
            </div>
        </div>
    );
}

export default InputSignIn;