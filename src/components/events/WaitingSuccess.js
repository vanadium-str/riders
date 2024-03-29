import React from 'react';
import { useSelector } from 'react-redux';
import { currentEventSelector, eventsListSelector } from '../../redux/selectors';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function WaitingSuccess() {

    const eventsList = useSelector(eventsListSelector);
    const currentEvent = useSelector(currentEventSelector);

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
                <ButtonEvents name={'הקפצות שלי'} event={'home'}/>
            </div>
        </div>
    );
}
    
export default WaitingSuccess;