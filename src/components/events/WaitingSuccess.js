import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function WaitingSuccess() {

    const { eventsList, currentEvent, setPageEvent } = useContext(ridersAppContext);

    let navigate = useNavigate();
    const event = eventsList.find((value) => {
        return value.event_id === currentEvent
    })

    return (
        <div className='container pe-3 mt-2'>
            <div className='row'>
                <div className='col-12 pageTitle mb-5'>
                    נרשמת להמתנה להקפמה ב{event.spot}
                </div>
                <div className='text-end ps-4'>
                    <p>
                        אם מישהו
                    </p>
                    <p>
                        יבטל תקבלו מקום והודעה לנייד ולמייל
                    </p>
                    <p>
                        נכון לעכשיו - {event.waiting} אנשים ברשימת המתנה
                    </p>
                </div>
                <div className='buttonBottom'>
                    <ButtonEvents name={'הקפצות שלי'} event={'home'}/>
                </div>
            </div>
        </div>
    );
}
    
export default WaitingSuccess;