import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function InputEventSmall({ type, name, explanation, content, empty }) {

    const { setMaxPlaces, setMinPlaces, date, setDate, setDateEnd } = useContext(ridersAppContext);

    function setTime(event, start){
        if(date){
            let timeArray = event.split(':');
            let newDate = new Date(date);
            newDate.setHours(timeArray[0]);
            newDate.setMinutes(timeArray[1]);
            start ? setDate(newDate) : setDateEnd(newDate);
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