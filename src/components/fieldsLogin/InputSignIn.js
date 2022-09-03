import React, { useContext, useState } from 'react';
import { ridersAppContext } from '../../utils/context';
import InputMessage from './InputMessage';

function InputSignIn({ placeholder, type, content, wrong, wrongMessage, green }) {

    const { setEmail, setPass, setPassRepeat, setPhone, setUsername } = useContext(ridersAppContext);

    const [showPass, setShowPass] = useState(false);

    const typeDefinition = (event) => {
        if(content === 'firstPass' || content === 'pass'){
            setPass(event);
        }else if(content === 'secondPass'){
            setPassRepeat(event);
        }else if(content === 'email'){
            setEmail(event);
        }else if(content === 'login'){
            setEmail(event);
        }else if(content === 'name'){
            setUsername(event);
        }else if(content === 'phone'){
            setPhone(event);
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