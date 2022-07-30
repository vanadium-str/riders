import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { joinSuccess, events, joinFailure, waitingList } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function ButtonEvents({ name, event, page, callbackWrongField }) {

    const { setPageEvent, driver, minPlaces, maxPlaces, price, date, dateEnd, userId, setDate, setDateEnd, setDriver, setPrice,
            setMinPlaces, setMaxPlaces, setPrivacy, currentEvent } = useContext(ridersAppContext);
    
    let navigate = useNavigate();
    const eventsPage = () => {
        setPageEvent('');
        navigate(`/${events}`);
    };

    const createEvent = () => {
        if(date === ''){
            callbackWrongField('date');
        }else if(dateEnd === ''){
            callbackWrongField('dateEnd');
        }else if(driver === ''){
            callbackWrongField('driver');
        }else if(price === ''){
            callbackWrongField('price');
        }else if(minPlaces === 0){
            callbackWrongField('minPlaces');
        }else if(maxPlaces === 0){
            callbackWrongField('maxPlaces');
        }else{
            fetch('http://www.snowsolutions.me/api/create_event',{
                method: 'POST',
                body: JSON.stringify({
                    driver_name: driver,
                    max_participants: maxPlaces,
                    min_participants: minPlaces,
                    price: price,
                    time_start: date,
                    time_end: dateEnd,
                    spot_id: 2,
                    user_id: userId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.status === -1){
                    console.error('Data Base Error');
   // error page                 
                }else{
                    console.log(data);
                    resetAll();
                    setPageEvent(page);
                }
            })
        }       
    }

    const joinEvent = () => {
        fetch('http://www.snowsolutions.me/api/join_event',{
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
                navigate(`/${joinSuccess}`);
            }else if(data.status === 1){
                navigate(`/${joinFailure}`);
            }else if(data.status === 2){
                //already joined
                navigate(`/${joinFailure}`);
            }else if(data.status === 3){
                console.error('No such event');
            }else if(data.status === -1){
                console.error('Data Base Error');
            }
        })
    }

    const joinWaiting = () => {
        fetch('http://www.snowsolutions.me/api/join_waiting',{
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
                navigate(`/${waitingList}`);
            }else if(data.status === 1){
                // no free places
            }else if(data.status === -1){
                console.error('Data Base Error');
            }
        })
    }
    
    return (
        <div className='d-flex justify-content-center my-5'>
            <button className='button' onClick={() => {
                if(event === 'create'){
                    createEvent();
                }else if(event === 'join'){
                    joinEvent();
                }else if(event === 'joinWaiting'){
                    joinWaiting();
                }else if(event === 'home'){
                    eventsPage();
                }else{
                    setPageEvent(page);
                }
            }}>
                {name}
            </button>
        </div>
    );

    function resetAll(){
        setDate('');
        setDateEnd('');
        setDriver('');
        setPrice('');
        setMinPlaces(0);
        setMaxPlaces(0);
        setPrivacy('');
    }
}

export default ButtonEvents;