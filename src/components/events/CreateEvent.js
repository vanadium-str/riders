import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import { createSpot, myEvents, URL } from '../../utils/constants';
import Location from '../eventsComponents/Location';
import InputEvent from '../eventsComponents/InputEvent';
import InputEventSmall from '../eventsComponents/InputEventSmall';
import Privacy from '../eventsComponents/Privacy';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function CreateEvent() {

    const { date, spotsList, setSpotsList } = useContext(ridersAppContext);

    const [emptyField, setEmptyField] = useState('');

    let navigate = useNavigate();

    const callbackWrongField = (field) => {
        setEmptyField(field);
    }

    useEffect(() => {
        fetch(URL + 'spots')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSpotsList(data);   
        })
    }, []);

    return (
        <div className='container py-3 minHeight'>
            <HeaderEvent name={'לפתוח הקפצה'} back={true} page={'aboutTrip'}/>
            <div className='row ms-1 mb-3'>
                <div className='col-6 colorBlue cursor' onClick={() => navigate(`/${createSpot}`)}>
                    להוסיף יעד
                </div>
                <div className='col-6 fw-bold row'>
                    <div className='colorGrey fw-normal text-end col-6'>
                        {spotsList.length}
                    </div>
                    <div className='col-6 text-end'>
                        יעדים
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {spotsList.map((item) => {
                    return(
                        <Location name={item.name} id={item.spot_id} coordinates={item.coordinates}/>
                    );
                })}
            </div>

            <div className='row mb-4'>
                <InputEvent type={'date'} content={'date'} empty={emptyField === 'date' ? true : false}/>
                {date ? 
                <div className='row g-0'>
                    <InputEventSmall type={'time'} content={'timeEnd'} explanation={'זמן סיום'}
                            empty={emptyField === 'dateEnd' ? true : false}/>
                    <InputEventSmall type={'time'} content={'timeStart'} explanation={'זמן התחלה'}
                            empty={emptyField === 'date' ? true : false}/>
                </div>    
                : <></>}

                <InputEvent type={'text'} name={'נהג'} content={'driver'}/>
                <InputEvent type={'number'} name={'₪ מחיר'} content={'price'} empty={emptyField === 'price' ? true : false}/>
            </div>
            <div className='row justify-content-center mb-4'>
                <div className='col-11 text-end fw-bold'>
                    מקומות 
                </div>
                <InputEventSmall type={'number'} name={'מקסימום'} explanation={'שנכנס להגלה'} content={'maximum'}
                        empty={emptyField === 'maxPlaces' ? true : false}/>
                <InputEventSmall type={'number'} name={'מינימום'} explanation={'כדי שהקפצה תתקיים'} content={'minimum'}
                        empty={emptyField === 'minPlaces' ? true : false}/>
            </div>
            <Privacy/>
            <ButtonEvents name={'הזמן'} page={myEvents} event={'create'} callbackWrongField={callbackWrongField}/>
        </div>
    );
}

export default CreateEvent;