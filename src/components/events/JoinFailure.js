import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { currentEventSelector, eventsListSelector } from '../../redux/selectors';
import { setCurrentPage } from '../../redux/slices/pageSlice';
import { events } from '../../utils/constants';
import ButtonEvents from '../eventsComponents/ButtonEvents';

function JoinFailure() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const eventsList = useSelector(eventsListSelector);
    const currentEvent = useSelector(currentEventSelector);

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
                <ButtonEvents name={'להירשם להמתנה'} event={'joinWaiting'}/>
                <div className='col-12 d-flex justify-content-center colorBlue cursor bottom'
                    onClick={() => {
                        dispatch(setCurrentPage(events));
                        navigate(`/${events}`);
                    }}>
                    לבטל
                </div>
            </div>
        </div>
    );
}
    
export default JoinFailure;