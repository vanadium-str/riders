import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function ButtonEvents({ name, event, page, callbackWrongField }) {

    const { setPageEvent, driver, minPlaces, maxPlaces, price, date, dateEnd, userId, setDate, setDateEnd, setDriver, setPrice,
            setMinPlaces, setMaxPlaces, setPrivacy } = useContext(ridersAppContext);
    
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
            fetch('http://81.28.7.100/api/create_event',{
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
    
    return (
        <div className='d-flex justify-content-center my-5'>
            <button className='button' onClick={() => {
                if(event === 'create'){
                    createEvent();
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