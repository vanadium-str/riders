import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCoordinates, setSpotName } from '../../redux/slices/eventsDataSlice';
import { createEvent } from '../../utils/constants';
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import Tracks from '../eventsComponents/Tracks';

function CreateSpot() {

    const [emptyField, setEmptyField] = useState('');
    const dispatch = useDispatch();

    const callbackWrongField = (field) => {
        setEmptyField(field);
    }

    return (
        <div className='container pe-3 minHeight'>
            <HeaderEvent name={'יעד רכיבה'} back={true} page={createEvent}/>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center position-relative'>
                    <input className={`inputSignIn text-end ltr ${emptyField === 'name' ? 'inputWrong' : ''}`} type='text' placeholder='שם'
                        onChange={(event) => {
                            dispatch(setSpotName(event.target.value));
                    }}/>
                </div>
                <div className='col-12 d-flex justify-content-center position-relative'>
                    <input className={`inputSignIn text-end ltr ${emptyField === 'coordinates' ? 'inputWrong' : ''}`}
                        type='text' placeholder='32.609889, 35.122237: מיקום' onChange={(event) => {
                            dispatch(setCoordinates(event.target.value));
                    }}/>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-12 text-end fw-bold pe-4'>
                    רמת המסלול
                </div>
                <Tracks empty={emptyField === 'level' ? true : false}/>
            </div>
            <ButtonEvents name={'הזמן'} page={createEvent} event={'createSpot'} callbackWrongField={callbackWrongField}/>
        </div>
    );
}
    
export default CreateSpot;