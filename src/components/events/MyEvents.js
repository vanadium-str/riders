import React, { useContext, useEffect, useState } from 'react';
import { createEvent, dateFormatting, dateTorender, URL } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import EventElement from './EventElement';

function MyEvents() {

    const { userId, myEvents, setMyEvents } = useContext(ridersAppContext);

    const [uniqueDates, setUniqueDates] = useState([]);
    const [loading, setLoading] = useState(false);
    let dates = [];

    useEffect(() => {
        fetch(URL + 'mycreated', {
            method: 'POST',
            body: JSON.stringify({
              user_id: userId
            }),
              headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(data => {
            setMyEvents(data);
            console.log(data);
            if(data.length){
                data.forEach((item) => {                 
                    dateFormatting(dates, item);
                });
                let datesFiltered = dates.filter((value, index, array) => array.indexOf(value) === index);
                setUniqueDates(datesFiltered);                
            }
        })
    }, []);

    return (
        <div className='container py-3 minHeight position-relative'>
            <HeaderEvent name={'הקפצות שפתחתי'} back={false}/>

            {loading ? 
                <div className='d-flex justify-content-center mt-5'>
                    <div class="spinner-border" role="status"/>
                </div>
            : <></>}
            
            <div className='row'>
                {myEvents.length ?

                    uniqueDates.map((item) => {
                        function filter (data){
                            let dateFormat = new Date(data.time_start);
                            if(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}` === item){
                                return true;
                            }else{
                                return false;
                            }
                        }
                        let sortedEvents = myEvents.filter(filter);
                        return(
                            <div>
                                <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                                    {dateTorender(item)}
                                </div>
                                {sortedEvents.map((event) => {
                                    return(
                                        <EventElement event={event} page={'myEvents'}/>
                                    )
                                })}
                            </div>
                        )
                    })

                :   <div className='col-12 text-end'>
                        לא נמצאים הקפצות
                    </div>
                }
                <ButtonEvents name={'+'} event={createEvent}/>
            </div>
        </div>
    );
}

export default MyEvents;