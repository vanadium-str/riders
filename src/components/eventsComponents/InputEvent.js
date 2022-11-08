import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { driverSelector } from '../../redux/selectors';
import { setDate, setPrice } from '../../redux/slices/eventsDataSlice';

function InputEvent({ type, name, content, empty }) {

    const dispatch = useDispatch();
    const driver = useSelector(driverSelector);

    const typeDefinition = (event) => {
        if(content === 'date'){
            dispatch(setDate(event));
        }else if(content === 'price'){
            dispatch(setPrice(event));
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