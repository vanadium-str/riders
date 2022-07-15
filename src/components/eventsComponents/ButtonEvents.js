import React, {useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function ButtonEvents({name, events, page}) {

    const {setPageEvent} = useContext(ridersAppContext);

    return (
        <div className='d-flex justify-content-center my-5'>
            <button className='button' onClick={() => {
                setPageEvent(page)
            }}>
                {name}
            </button>
        </div>
    );
}

export default ButtonEvents;