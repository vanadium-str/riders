import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { events } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function JoinFailure() {

    const { eventsList, currentEvent, setPageEvent } = useContext(ridersAppContext);

    let navigate = useNavigate();
    const event = eventsList.find((value) => {
        return value.event_id === currentEvent
    })

    return (
        <div className='container pe-3 mt-2'>
            <div className='row'>
                <div className='col-12 pageTitle mb-1'>
                    Oops
                </div>
                <div className='col-12 pageTitle mb-5'>
                    נגמרו מקומות בהקפצה
                </div>
                <div className='text-end ps-4'>
                    <p>
                        את(ה) מוזמנ(ת) להירשם להמתנה. אם מישהו
                    </p>
                    <p>
                        יבטל תקבלו מקום והודעה לנייד ולמייל
                    </p>
                    <p>
                        נכון לעכשיו - {event.waiting} אנשים ברשימת המתנה
                    </p>
                </div>
                <div className='buttonBottom'>
                    <ButtonEvents name={'להירשם להמתנה'} event={'joinWaiting'}/>
                </div>
                <div className='col-12 d-flex justify-content-center colorBlue cursor mb-3 buttonBottom'
                    onClick={() => {
                        setPageEvent('');
                        navigate(`/${events}`);
                    }}>
                    לבטל
                </div>
            </div>
        </div>
    );
}
    
export default JoinFailure;