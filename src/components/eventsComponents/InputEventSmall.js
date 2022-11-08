import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateSelector, eventsListSelector } from '../../redux/selectors';
import { setDate, setDateEnd } from '../../redux/slices/eventsDataSlice';
import { ridersAppContext } from '../../utils/context';

function InputEventSmall({ type, name, explanation, content, empty }) {

    const { setMaxPlaces, setMinPlaces, currentEvent } = useContext(ridersAppContext);

    const dispatch = useDispatch();
    const eventsList = useSelector(eventsListSelector);
    const date = useSelector(dateSelector);
    let eventCurrent = [];
    
    if(eventsList.lenght){
        eventCurrent = eventsList.find((value) => {
            return value.event_id === currentEvent
        })
    }
    // const eventCurrent = eventsList.find((value) => {
    //     return value.event_id === currentEvent
    // })

    function setTime(event, start){
        if(content === 'timeStartEdit' || content === 'timeEndEdit'){
            let timeArray = event.split(':');
            let newDate = new Date(eventCurrent.time_start);
            newDate.setHours(timeArray[0]);
            newDate.setMinutes(timeArray[1]);
            start ? dispatch(setDate(newDate)) : dispatch(setDateEnd(newDate));
        }else if(date){
            let timeArray = event.split(':');
            let newDate = new Date(date);
            newDate.setHours(timeArray[0]);
            newDate.setMinutes(timeArray[1]);
            start ? dispatch(setDate(newDate)) : dispatch(setDateEnd(newDate));
        }
    }

    const typeDefinition = (event) => {
        if(content === 'maximum'){
            setMaxPlaces(event);
        }else if(content === 'minimum'){
            setMinPlaces(event);
        }else if(content === 'timeStart'){
            setTime(event, true);
        }else if(content === 'timeEnd'){
            setTime(event, false);
        }else if(content === 'timeStartEdit'){
            setTime(event, true);
        }else if(content === 'timeEndEdit'){
            setTime(event, false);
        }
    }

    return (
        <div className='col-6 d-flex flex-column align-items-center'>
            <input className={`inputSignIn inputSmall text-end ltr ${empty ? 'inputWrong' : ''}`} type={type} placeholder={name} onChange={(event) => {
                typeDefinition(event.target.value);
            }}/>
            <div className='smallText colorGrey text-end w-75'>
                {explanation}
            </div>
        </div>
    );
}
    
export default InputEventSmall;