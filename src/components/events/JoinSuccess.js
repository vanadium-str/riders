import React from 'react';
import { useSelector } from 'react-redux';
import { currentEventSelector, eventsListSelector } from '../../redux/selectors';
import { joinSuccessDate } from '../../utils/constants';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function JoinSuccess() {

    const eventsList = useSelector(eventsListSelector);
    const currentEvent = useSelector(currentEventSelector);

    const event = eventsList.find((value) => {
        return value.event_id === currentEvent
    })

    return (
        <div className='container pe-3 mt-2'>
            <div className='row'>
                <div className='col-12 pageTitle mb-5'>
                    נרשמת להקפצה ב{event.spot} בהצלחה
                </div>
                <div className='text-end ps-4'>
                    <p>
                        ההקפצה יתקיים ביום {joinSuccessDate(event.time_start)}
                    </p>
                    <p>
                        במקרה מתקיים שינוי תקבלו הודעה למייל ולנייד
                    </p>
                    <p>
                        מומלץ להגיע למקום רבע שעה לפני זמן התחלה. אם אתם מאחרים צרו קשר עם המוביל מראש
                    </p>
                </div>
                <ButtonEvents name={'הקפצות שלי'} event={'home'}/>
            </div>
        </div>
    );
}
    
export default JoinSuccess;