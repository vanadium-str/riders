import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { unsubscribeSuccess } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function ModalUnsubscribe({ active, setActive }) {

    const { currentEvent, userId } = useContext(ridersAppContext);

    let navigate = useNavigate();

    const unsubscribe = () => {
        fetch('http://www.snowsolutions.me/api/leave_event',{
            method: 'POST',
            body: JSON.stringify({
                event_id: currentEvent,
                user_id: userId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status === 0){                
                navigate(`/${unsubscribeSuccess}`);
            }else if(data.status === -1){
                console.error('Data Base Error');
            }
        })        
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modalContent ${active ? 'active' : ''} d-flex flex-column justify-content-center`}
                onClick={(e) => e.stopPropagation()}>
                <div className='d-flex justify-content-center rtl'>
                    אתה בטוח שתרצה לבטל מקום שלך בהקפצה?                   
                </div>
                <div className='d-flex flex-row justify-content-around mt-5'>
                    <button className='buttonSmall' onClick={() => unsubscribe()}>
                        כן
                    </button>
                    <button className='backgroundBlue buttonSmall' onClick={() => {
                        setActive(false);
                    }}>
                        לא
                    </button>
                </div>
            </div>
        </div>
    );
}
    
export default ModalUnsubscribe;