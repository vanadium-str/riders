import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function ButtonEvents({name, event, page}) {

    const { setPageEvent, driver, minPlaces, maxPlaces, price, date } = useContext(ridersAppContext);

    const createEvent = () => {
        console.log(maxPlaces)
        console.log(minPlaces)
        console.log(price)
        // fetch('http://81.28.7.100/api/create_event',{
        //     method: 'POST',
        //     body: JSON.stringify({
        //         driver_name: driver,
        //         max_participants: maxPlaces,
        //         min_participants: minPlaces,
        //         price: price,
        //         time_start: date,
        //         time_end: '2022-07-15T21:00',
        //         spot_id: 1
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
    }

    return (
        <div className='d-flex justify-content-center my-5'>
            <button className='button' onClick={() => {
                if(event === 'create'){
                    createEvent();
                }
                setPageEvent(page)
            }}>
                {name}
            </button>
        </div>
    );
}

export default ButtonEvents;