import React from 'react';
import { createLink } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { spotIdSelector } from '../../redux/selectors';
import { setSpotId } from '../../redux/slices/eventsDataSlice';

function Location({ name, id, coordinates }) {

    const spotId = useSelector(spotIdSelector);
    const dispatch = useDispatch();

    return (
        <div className={`col-5 locationBlock cursor ${id === spotId ? 'backgroundBlue' : 'backgroundWhite'}`} onClick={() => {
            if(spotId !== id){
                dispatch(setSpotId(id));
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