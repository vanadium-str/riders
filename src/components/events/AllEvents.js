import React, {useContext, useEffect, useState} from 'react';
import { dateFormatting, dateTorender } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import EventElement from './EventElement';
import HeaderEvent from './HeaderEvent';

function AllEvents() {

    const {eventsList, setEventsList} = useContext(ridersAppContext);
    const [uniqueDates, setUniqueDates] = useState([]);
    let dates = [];

    useEffect(() => {
        fetch('https://riderrs.herokuapp.com/api/runs')
            .then(response => response.json())
            .then(data => {
                setEventsList(data);
                console.log(data);
                data.forEach((item) => {                 
                    dateFormatting(dates, item)
                });
                let datesFiltered = dates.filter((value, index, array) => array.indexOf(value) === index);
                setUniqueDates(datesFiltered);
                console.log(uniqueDates);
            }
        );
    }, []);

    return (
        <div className='container py-3'>
            <div className='row-reverse'>
                <HeaderEvent name={'הקפצות'}/>

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
                    console.log(sortedEvents)
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