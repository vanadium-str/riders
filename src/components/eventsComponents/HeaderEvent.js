import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';
import { personalArea } from '../../utils/constants';

function HeaderEvent({name, back, page}) {

    const { setPageEvent, setDate, setDateEnd, setDriver, setPrice, setMinPlaces, setMaxPlaces, setPrivacy, setCurrentBlock, setSpotId,
            setTrackLevel, setSpotName, setCoordinates } = useContext(ridersAppContext);

    let navigate = useNavigate();

    return (
        <div className='row'>
            {back ? <></> : 
            <div className='col-4 d-flex align-items-center cursor ps-4'
                onClick={() => navigate(`/${personalArea}`)}>
                🙂
            </div>}
            <div className={`${back ? 'col-12 mediumTitle mb-5 mt-2' : 'col-8 pageTitle'}`}>
                {name} {back ? <img src={arrow} className='cursor' onClick={() => {
                        if(page === 'events'){
                            setCurrentBlock('allTrips');
                        }else if(page === 'myTrips'){
                            setCurrentBlock('myTrips');
                        }else{
                            setCurrentBlock('myEvents');
                        }
                        resetAll();
                        setPageEvent(page);
                    }}/>
                    : ''}
            </div>
        </div>
    );

    function resetAll(){
        setDate('');
        setDateEnd('');
        setDriver('');
        setPrice('');
        setMinPlaces(0);
        setMaxPlaces(0);
        setPrivacy('');
        setSpotId(-1);
        setTrackLevel([]);
        setSpotName('');
        setCoordinates('');
    }
}

export default HeaderEvent;