import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function InputEvent({ type, name, content, empty }) {

    const { setDate, driver, setPrice } = useContext(ridersAppContext);

    const typeDefinition = (event) => {
        if(content === 'date'){
            setDate(event);
        }else if(content === 'price'){
            setPrice(event);
        }
    }
    
    return (
        <div className='col-12 d-flex justify-content-center'>
            <input className={`inputSignIn text-end ltr ${empty ? 'inputWrong' : ''}`} type={type}
            placeholder={content === 'driver' ? driver : name} disabled={content === 'driver'} onChange={(event) => {
                    typeDefinition(event.target.value);
            }}/>
        </div>
    );
}
    
export default InputEvent;