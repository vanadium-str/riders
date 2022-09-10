import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { errorPage, events, myEvents, timeToRender, URL } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function ModalDeleteEvent({ active, setActive, event }) {

    const { currentEvent, setPageEvent, setCurrentBlock } = useContext(ridersAppContext);

    let navigate = useNavigate();


    const deleteEvent = () => {
        fetch(URL + 'delete_event',{
            method: 'POST',
            body: JSON.stringify({
                event_id: currentEvent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status === -1){
                console.error('Data Base Error');
                navigate(`/${errorPage}`);
            }else if(data){
                setCurrentBlock('myEvents');
                setPageEvent(myEvents);
                navigate(`/${events}`);
            }
        })
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modalContent ${active ? 'active' : ''} d-flex flex-column justify-content-center`}
                onClick={(e) => e.stopPropagation()}>
                <div className='d-flex justify-content-center rtl'>
                    האם אתה בודאות רוצה לבטל את מקומך בהקפצה {event.spot} {timeToRender(event.time_start)} ?              
                </div>
                <div className='d-flex flex-row justify-content-around mt-5'>
                    <button className='buttonSmall' onClick={() => deleteEvent()}>
                        בטל 
                    </button>
                    <button className='backgroundBlue buttonSmall' onClick={() => {
                        setActive(false);
                    }}>
                        חזור
                    </button>
                </div>
            </div>
        </div>
    );
}
    
export default ModalDeleteEvent;