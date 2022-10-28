import React, { useEffect, useState } from 'react';
import { dateFormatting, dateTorender, URL } from '../../utils/constants';
import EventElement from './EventElement';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import { useDispatch, useSelector } from 'react-redux';
import { myRunsSelector, userIdSelector } from '../../redux/selectors';
import { setMyRuns } from '../../redux/slices/eventsSlice';

function MyRuns() {

    const [uniqueDates, setUniqueDates] = useState([]);
    const [loading, setLoading] = useState(false);
    let dates = [];
    const dispatch = useDispatch();
    const userId = useSelector(userIdSelector);
    const myRuns = useSelector(myRunsSelector);

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
            console.log(data);
            dispatch(setMyRuns(data));
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