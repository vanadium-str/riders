import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myEventsSelector, userIdSelector } from '../../redux/selectors';
import { setMyEvents } from '../../redux/slices/eventsSlice';
import { createEvent, dateFormatting, dateTorender, myEvents, URL } from '../../utils/constants';
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import EventElement from './EventElement';

function MyEvents() {

    const [uniqueDates, setUniqueDates] = useState([]);
    const [loading, setLoading] = useState(false);
    let dates = [];
    const dispatch = useDispatch();
    const userId = useSelector(userIdSelector);
    const myEventsArray = useSelector(myEventsSelector);

    useEffect(() => {
        setLoading(true);
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
            console.log(data);
            dispatch(setMyEvents(data));
            setLoading(false);
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
                    <div className="spinner-border" role="status"/>
                </div>
            : <></>}
            
            <div className='row'>
                {myEventsArray.length ?

                    uniqueDates.map((item, key) => {
                        function filter (data){
                            let dateFormat = new Date(data.time_start);
                            if(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}` === item){
                                return true;
                            }else{
                                return false;
                            }
                        }
                        let sortedEvents = myEventsArray.filter(filter);
                        return(
                            <div key={key}>
                                <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                                    {dateTorender(item)}
                                </div>
                                {sortedEvents.map((event, key) => {
                                    return(
                                        <EventElement event={event} page={myEvents} key={key}/>
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