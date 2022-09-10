import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { TbCaravan } from "react-icons/tb";
import { aboutEvent, timeToRender } from '../../utils/constants';
import { ridersAppContext } from "../../utils/context";
import NumberOfSeats from '../eventsComponents/NumberOfSeats';
import PlaceAndTime from '../eventsComponents/PlaceAndTime';

function EventElement({ event, page }) {

    const { setCurrentEvent, admin, setCurrentPage } = useContext(ridersAppContext);
    
    const vacancy = event.max_participants - event.booked;
    let navigate = useNavigate();

    return(
        <div className='container backgroundElement my-1 p-2 cursor' onClick={() => {
            if(event.is_private === 0 || admin === 1){
                setCurrentEvent(event.event_id);
                setCurrentPage(page);
                navigate(`/${aboutEvent}/${event.event_id}`);
            }
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
                {event.waiting ? 
                    <div className='col-2'>
                        <NumberOfSeats number={event.waiting} name={'בהמתנה'}/>
                    </div>            
                : <></>}
                <div className={`${event.waiting ? 'col-6' : 'col-8'}`}>
                   <PlaceAndTime place={event.spot} timeFrom={timeToRender(event.time_start)}
                    timeTo={timeToRender(event.time_end)} done={event.booked >= event.min_participants ? true : false}/>
                </div>
                <div className={`col-9 text-start ps-3 smallText ${event.is_private ? 'colorRed' : 'colorBlue mediumBoldText'}`}>
                    {event.is_private ? 'אירוע פרטי, לא ניתן להצטרף' : 'תצטרפו'}
                </div>
                <div className='col-3 colorGrey'>
                    {event.driver} <TbCaravan/>
                </div>
            </div>
        </div>
    );
}

export default EventElement;