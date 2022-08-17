import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import { errorPage, myEvents  } from '../../utils/constants';
import InputEventSmall from './InputEventSmall';

function ModalEdit({ active, setActive }) {

    const { date, dateEnd, currentEvent, setPageEvent } = useContext(ridersAppContext);

    let navigate = useNavigate();

    const editTime = () => {
        fetch('http://www.snowsolutions.me/api/time_update',{
            method: 'PUT',
            body: JSON.stringify({
                event_id: currentEvent,
                time_start: date,
                time_end: dateEnd
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 0){
                setActive(false);
                setPageEvent(myEvents);
            }else if(data.status === 1){
                console.error('Data Base error');
                setActive(false);
                navigate(`/${errorPage}`);
            }
        })
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modalContent ${active ? 'active' : ''} d-flex flex-column justify-content-center`}
                onClick={(e) => e.stopPropagation()}>
                    <div className='d-flex justify-content-center mb-3'>
                        :בחרו זמן חדש
                    </div>
                <div className='d-flex flex-row justify-content-between mb-5'>
                    <InputEventSmall type={'time'} explanation={'זמן סיום'} content={'timeEndEdit'}/>
                    <InputEventSmall type={'time'} explanation={'זמן התחלה'} content={'timeStartEdit'}/>
                </div>
                <div className='d-flex flex-row justify-content-around'>
                    <button className='buttonSmall' onClick={() => editTime()}>
                        שמור
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
    
export default ModalEdit;