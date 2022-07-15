import React, {useContext, useEffect, useState} from 'react';
import { week } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import EventElement from './EventElement';
import HeaderEvent from './HeaderEvent';

function AllEvents() {

    const {eventsList, setEventsList} = useContext(ridersAppContext);

    // useEffect(() => {
    //     fetch('https://riderrs.herokuapp.com/api/runs')
    //         .then(response => response.json())
    //         .then(data => {
    //             setEventsList(data);
    //             console.log(eventsList);
    //             console.log(data);
    //             let date = data.time_end.getDate()
    //             console.log(date);
    //         }
    //     );
    // }, []);

    return (
        <div className='container py-3'>
            <div className='row-reverse'>
                <HeaderEvent name={'הקפצות'}/>
                <div className='col-2 offset-10 rtl mt-4'>
                    15 {week[0]}'
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>

                <div className='col-2 offset-10 rtl mt-4'>
                    16 {week[1]}'
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>
                <div className='col-12'>
                    <EventElement/>
                </div>
            </div>
        </div>
    );
}

export default AllEvents;