import React, { useContext, useEffect } from 'react';
import { ridersAppContext } from '../../utils/context';
import { TbTrash } from "react-icons/tb";

function RidersList({ booked, max, eventId}) {

    const { ridersList, setRidersList, admin, currentPage } = useContext(ridersAppContext);

    useEffect(() => {
        fetch('http://www.snowsolutions.me/api/participants_list', {
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
                setRidersList(data);
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
            {ridersList.map((item) => {
                        return(
                            <div className='d-flex flex-row justify-content-end mb-2'>
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