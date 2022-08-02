import React, { useContext } from 'react';
import { joinSuccessDate } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function JoinSuccess() {

    const { eventsList, currentEvent } = useContext(ridersAppContext);

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