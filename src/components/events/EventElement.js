import React, { useContext } from 'react';
import { TbCaravan } from "react-icons/tb";
import { aboutEvent, timeToRender } from '../../utils/constants';
import { ridersAppContext } from "../../utils/context";
import NumberOfSeats from '../eventsComponents/NumberOfSeats';
import PlaceAndTime from '../eventsComponents/PlaceAndTime';

function EventElement({event}) {

    const { setPageEvent, setCurrentEvent } = useContext(ridersAppContext);
    
    const vacancy = event.max_participants - event.booked;

    return(
        <div className='container backgroundElement my-1 p-2 cursor' onClick={() => {
            setCurrentEvent(event.event_id);
            setPageEvent(aboutEvent);
        }}>
            <div className='row text-end d-flex align-items-end'>
                <div className={`col-2  ${vacancy < 4 ? 'colorOrange' : ''}
                    ${vacancy === 0 ? 'colorRed' : ''}`}>
                    <NumberOfSeats number={event.max_participants} name={'מתוך'} big={false}/>
                </div>
                <div className={`col-2  ${vacancy < 4 ? 'colorOrange' : ''} 
                    ${vacancy === 0 ? 'colorRed' : ''}`}>
                    <NumberOfSeats number={vacancy} name={'פנוי'} big={true}/>
                </div>
                <div className='col-2'>
                    <NumberOfSeats number={event.waiting} name={'בהמתנה'} big={true}/>
                </div>
                <div className='col-6'>
                   <PlaceAndTime place={event.spot} timeFrom={timeToRender(event.time_start)}
                    timeTo={timeToRender(event.time_end)} done={event.booked >= event.min_participants ? true : false}/>
                </div>
                <div className='col-12 colorGrey'>
                    {event.driver} <TbCaravan/>
                </div>
            </div>
        </div>
    );
}

export default EventElement;