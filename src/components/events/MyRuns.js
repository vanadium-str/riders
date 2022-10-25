import React, { useContext, useEffect, useState } from 'react';
import { dateFormatting, dateTorender, URL } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import EventElement from './EventElement';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import { useSelector } from 'react-redux';
import { userIdSelector } from '../../redux/selectors';

function MyRuns() {

    const { myRuns, setMyRuns } = useContext(ridersAppContext);

    const [uniqueDates, setUniqueDates] = useState([]);
    const [loading, setLoading] = useState(false);
    let dates = [];
    const userId = useSelector(userIdSelector);

    useEffect(() => {
        setLoading(true);
        fetch(URL + 'myruns', {
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
        <div className='container py-3 minHeight'>
            <HeaderEvent name={'הקפצות'} back={false}/>

            {loading ? 
                <div className='d-flex justify-content-center mt-5'>
                    <div className="spinner-border" role="status"/>
                </div>
            : <></>}
            
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