import React, {useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import { aboutEvent, myEvents } from '../../utils/constants';
import Location from '../eventsComponents/Location';
import InputEvent from '../eventsComponents/InputEvent';
import InputEventSmall from '../eventsComponents/InputEventSmall';
import Privacy from '../eventsComponents/Privacy';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import RidersList from '../eventsComponents/RidersList';
import AddRider from '../eventsComponents/AddRider';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function CreateEvent({name, events, page}) {

    const {setPageEvent} = useContext(ridersAppContext);

    return (
        <div className='container py-3 minHeight'>
            <HeaderEvent name={'לפתוח הקפצה'} back={true} page={myEvents}/>
            <div className='row ms-1 mb-3'>
                <div className='col-6 colorBlue'>
                    להוסיף יעד
                </div>
                <div className='col-6 fw-bold row'>
                    <div className='colorGrey fw-normal text-end col-6'>
                        6
                    </div>
                    <div className='col-6 text-end'>
                        יעדים
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <Location name={'משמר העמק'}/>
                <Location name={'משגב'}/>
                <Location name={'כפר החורש'}/>
            </div>

            <div className='row mb-4'>
                <InputEvent type={'datetime-local'} content={'date'}/>
                <InputEventSmall type={'time'} content={'time'}/>
                <div className='col-5 text-end d-flex align-items-center justify-content-center'>
                    זמן סיום
                </div>
                <InputEvent type={'text'} name={'נהג'} content={'driver'}/>
                <InputEvent type={'number'} name={'₪ מחיר'} content={'price'}/>
            </div>
            <div className='row justify-content-center mb-4'>
                <div className='col-11 text-end fw-bold'>
                    מקומות 
                </div>
                <InputEventSmall type={'number'} name={'מקסימום'} explanation={'שנכנס להגלה'} content={'maximum'}/>
                <InputEventSmall type={'number'} name={'מינימום'} explanation={'כדי שהקפצה תתקיים'} content={'minimum'}/>
            </div>
            <Privacy/>
            <RidersList/>
            <AddRider places={3}/>
            <ButtonEvents name={'הזמן'} page={aboutEvent} event={'create'}/>
        </div>
    );
}

export default CreateEvent;