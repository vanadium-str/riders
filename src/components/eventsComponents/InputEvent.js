import React, {useContext, useState} from 'react';
import { ridersAppContext } from '../../utils/context';

function InputEvent({type, name, content}) {

    const {setDate, setDriver, setPrice} = useContext(ridersAppContext);

    const typeDefinition = (event) => {
        if(content === 'date'){
            setDate(event);
        }else if(content === 'driver'){
            setDriver(event);
        }else if(content === 'price'){
            setPrice(event);
        }
    }

    return (
        <div className='col-12 d-flex justify-content-center'>
            <input className='inputSignIn text-end ltr' type={type} placeholder={name} onChange={(event) => {
                typeDefinition(event.target.value);
            }}/>
        </div>
    );
}
    
export default InputEvent;