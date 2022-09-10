import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import { createLink } from '../../utils/constants';

function Location({ name, id, coordinates }) {

    const { spotId, setSpotId } = useContext(ridersAppContext);

    return (
        <div className={`col-5 locationBlock cursor ${id === spotId ? 'backgroundBlue' : 'backgroundWhite'}`} onClick={() => {
            if(spotId !== id){
                setSpotId(id);
            }
        }}>
            <div className={`col-4 ${id === spotId ? 'backgroundBlue' : 'colorBlue'}`} onClick={() => {
                window.open(createLink(coordinates));
            }}>
                מפה
            </div>
            <div className='col-8 text-end fw-bold'>
                {name}
            </div>
        </div>
    );
}
    
export default Location;