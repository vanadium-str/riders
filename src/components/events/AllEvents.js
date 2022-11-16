import React, { useEffect, useState } from 'react';
import { dateFormatting, dateTorender, events, URL } from '../../utils/constants';
import EventElement from './EventElement';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import { useDispatch, useSelector } from 'react-redux';
import { setEventsList } from '../../redux/slices/eventsSlice';
import { eventsListSelector } from '../../redux/selectors';

function AllEvents() {

    const dispatch = useDispatch();
    const [uniqueDates, setUniqueDates] = useState([]);
    const [loading, setLoading] = useState(false);
    const eventsList = useSelector(eventsListSelector);
    let dates = [];

    useEffect(() => {
        setLoading(true);
        fetch(URL + 'runs')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(setEventsList(data));
                setLoading(false);
                data.forEach((item) => {                 
                    dateFormatting(dates, item);
                });
                let datesFiltered = dates.filter((value, index, array) => array.indexOf(value) === index);
                setUniqueDates(datesFiltered);
            }
        );
    }, []);

    return (
        <div className='container py-3 minHeight'>
            <HeaderEvent name={'הקפצות'} back={false}/>

            {loading ? 
                <div className='d-flex justify-content-center mt-5'>
                    <div className="spinner-border" role="status"/>
                </div>
            : <></>}

            <div className='row-reverse'>

                {eventsList.length ? uniqueDates.map((item, key) => {
                    function filter(data) {
                        let dateFormat = new Date(data.time_start);
                        if(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}` === item) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    let sortedEvents = eventsList.filter(filter);
                    return(
                        <div key={key}>
                            <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                                {dateTorender(item)}
                            </div>
                            {sortedEvents.map((event, key) => {
                                return(
                                    <EventElement event={event} page={events} key={key}/>
                                )
                            })}
                        </div>
                    )
                })
                :   <div className='text-end'>
                        אין הקפצות נפתחות
                    </div>
                }
            </div>
        </div>
    );
}

export default AllEvents;

                {/* <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                    15/07 {week[0]}'
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>

                <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                    16/07 {week[1]}'
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div> */}