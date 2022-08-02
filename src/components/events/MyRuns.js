import React, { useContext, useEffect, useState } from 'react';
import { dateFormatting, dateTorender } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import EventElement from './EventElement';
import HeaderEvent from '../eventsComponents/HeaderEvent';

function MyRuns() {

    const { myRuns, setMyRuns, userId } = useContext(ridersAppContext);

    const [uniqueDates, setUniqueDates] = useState([]);
    let dates = [];

    useEffect(() => {
        fetch('http://www.snowsolutions.me/api/myruns', {
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
            setMyRuns(data);
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
        <div className='container py-3 minHeight'>
            <HeaderEvent name={'הקפצות'} back={false}/>
            <div className='row-reverse'>
                {myRuns.length ?

                uniqueDates.map((item) => {
                    function filter (data){
                        let dateFormat = new Date(data.time_start);
                        if(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}` === item){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    let sortedEvents = myRuns.filter(filter);
                    return(
                        <div>
                            <div className='col-12 rtl mt-4 mb-1 px-2 d-flex justify-content-start'>
                                {dateTorender(item)}
                            </div>
                            {sortedEvents.map((event) => {
                                return(
                                    <EventElement event={event} page={'myRuns'}/>
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

export default MyRuns;