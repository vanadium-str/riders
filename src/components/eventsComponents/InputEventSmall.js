import React, {useContext, useState} from 'react';
import { ridersAppContext } from '../../utils/context';

function InputEventSmall({type, name, explanation, content}) {

    const { setMaxPlaces, setMinPlaces, date } = useContext(ridersAppContext);

    const typeDefinition = (event) => {
        if(content === 'maximum'){
            setMaxPlaces(event);
        }else if(content === 'minimum'){
            setMinPlaces(event);
        }else if(content === 'time'){
            console.log(event);
        }
    }

    return (
        <div className={`col-6 d-flex flex-column align-items-center ${content === 'time' ? 'offset-1' : ''}`}>
            <input className='inputSignIn inputSmall text-end ltr' type={type} placeholder={name} onChange={(event) => {
                typeDefinition(event.target.value);
            }}/>
            <div className='smallText colorGrey text-end w-75'>
                {explanation}
            </div>
        </div>
    );
}
    
export default InputEventSmall;