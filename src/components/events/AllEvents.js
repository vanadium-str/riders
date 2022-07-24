import React, {useContext, useEffect, useState} from 'react';
import { dateFormatting, dateTorender } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import EventElement from './EventElement';
import HeaderEvent from '../eventsComponents/HeaderEvent';

function AllEvents() {

    const {eventsList, setEventsList, userId} = useContext(ridersAppContext);
    const [uniqueDates, setUniqueDates] = useState([]);
    let dates = [];

    useEffect(() => {
        fetch('http://81.28.7.100/api/runs')
            .then(response => response.json())
            .then(data => {
                setEventsList(data);
                console.log(data);
                data.forEach((item) => {                 
                    dateFormatting(dates, item)
                });
                let datesFiltered = dates.filter((value, index, array) => array.indexOf(value) === index);
                setUniqueDates(datesFiltered);
            }
        );
    }, []);

    return (
        <div className='container py-3 minHeight'>
            <HeaderEvent name={'הקפצות'} back={false}/>
            <div className='row-reverse'>

                {uniqueDates.map((item) => {
                    function filter (data){
                        let dateFormat = new Date(data.time_start);
                        if(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}` === item){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    let sortedEvents = eventsList.filter(filter);
                    return(
                        <div>
                            <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                                {dateTorender(item)}
                            </div>
                            {sortedEvents.map((event) => {
                                return(
                                    <EventElement event={event}/>
                                )
                            })}
                        </div>
                    )
                })}

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
            </div>
        </div>
    );
}

export default AllEvents;