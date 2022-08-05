import React, { useContext, useState } from 'react';
import { ridersAppContext } from '../../utils/context';

function Location({ name, id }) {

    const { spotId, setSpotId } = useContext(ridersAppContext);

    return (
        <div className={`col-5 locationBlock ${id === spotId ? 'backgroundBlue' : 'backgroundWhite'}`} onClick={() => {
            if(spotId !== id){
                setSpotId(id);
            }
        }}>
            <div className={`col-4 ${id === spotId ? 'backgroundBlue' : 'colorBlue'}`}>
                מפה
            </div>
            <div className='col-8 text-end fw-bold'>
                {name}
            </div>
        </div>
    );
}
    
export default Location;