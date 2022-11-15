import React, { useEffect } from 'react';
import { TbTrash } from "react-icons/tb";
import { URL } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { ridersListSelector } from '../../redux/selectors';
import { setRidersList } from '../../redux/slices/eventsSlice';

function RidersList({ booked, max, eventId}) {

    const ridersList = useSelector(ridersListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(URL + 'participants_list', {
            method: 'POST',
            body: JSON.stringify({
                event_id: eventId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
                dispatch(setRidersList(data));
                console.log(data);
        });
    }, []);

    return (
        <div className='row'>
            <div className='col-12 mt-4 mb-2 d-flex justify-context-end rtl'>
                <div className='fw-bold'>
                    נרשמים   
                </div>
                <div className='colorGrey me-2'>
                    {booked} / {max}
                </div>
            </div>
            {ridersList.map((item, key) => {
                        return(
                            <div className='d-flex flex-row justify-content-end mb-2' key={key}>
                                <div>
                                    {item.phone}
                                </div>
                                <div className='ms-5'>
                                    {item.name}
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    );
}

export default RidersList;

            {/* <div className='offset-1 col-2 colorRed'>
                <TbTrash/>  
            </div>
            <div className='col-9 text-end'>
                אפולינריס של המולד  
            </div>
            <div className='offset-1 col-2 colorRed'>
                <TbTrash/>  
            </div>
            <div className='col-9 text-end'>
                אפולינריס של המולד  
            </div> */}