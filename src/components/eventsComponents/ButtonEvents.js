import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userIdSelector } from '../../redux/selectors';
import { joinSuccess, events, joinFailure, waitingList, myRuns, alreadyJoin, errorPage, createEvent, URL, allEvents } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import ModalEdit from '../eventsComponents/ModalEdit';
import ModalDeleteEvent from './ModalDeleteEvent';
import ModalUnsubscribe from './ModalUnsubscribe';

function ButtonEvents({ name, event, page, callbackWrongField }) {

    const { setPageEvent, driver, minPlaces, maxPlaces, price, date, dateEnd, privacy, spotId, spotName, trackLevel, setDate,
            setDateEnd, setDriver, setPrice, setMinPlaces, setMaxPlaces, setPrivacy, currentEvent, setCurrentBlock, setSpotId,
            setTrackLevel, setSpotName, setCoordinates, coordinates, setCurrentPage } = useContext(ridersAppContext);

    const [activeModalEdit, setActiveModalEdit] = useState(false);
    const [activeModalUnsubscribe, setActiveModalUnsubscribe] = useState(false);

    const userId = useSelector(userIdSelector);
    
    let navigate = useNavigate();
    const eventsPage = () => {
        setCurrentBlock('myRuns');
        setPageEvent(myRuns);
        navigate(`/${events}`);
    };

    const createEventFunction = () => {
        if(date === ''){
            callbackWrongField('date');
        }else if(dateEnd === ''){
            callbackWrongField('dateEnd');
        }else if(spotId === -1){
            alert('Please, choose spot');
        }else if(price === ''){
            callbackWrongField('price');
        }else if(minPlaces === 0){
            callbackWrongField('minPlaces');
        }else if(maxPlaces === 0){
            callbackWrongField('maxPlaces');
        }else if(spotId === -1){
            alert('Please choose spot');
        }else{
            fetch(URL + 'create_event',{
                method: 'POST',
                body: JSON.stringify({
                    driver_name: driver,
                    max_participants: maxPlaces,
                    min_participants: minPlaces,
                    price: price,
                    time_start: date,
                    time_end: dateEnd,
                    is_private: privacy,
                    spot_id: spotId,
                    user_id: userId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.status === -1){
                    console.error('Data Base Error');
                    navigate(`/${errorPage}`);                 
                }else{
                    console.log(data);
                    resetAll();
                    setCurrentBlock('allTrips');
                    setPageEvent(allEvents);
                    navigate(`/${events}`);
                }
            })
        }       
    }

    const joinEvent = () => {
        fetch(URL + 'join_event',{
            method: 'POST',
            body: JSON.stringify({
                event_id: currentEvent,
                user_id: userId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status === 0){                
                navigate(`/${joinSuccess}`);
            }else if(data.status === 1){
                navigate(`/${joinFailure}`);
            }else if(data.status === 2){
                navigate(`/${alreadyJoin}`);
            }else if(data.status === 3){
                console.error('No such event');
                navigate(`/${errorPage}`);
            }else if(data.status === -1){
                console.error('Data Base Error');
                navigate(`/${errorPage}`);
            }
        })
    }

    const joinWaiting = () => {
        fetch(URL + 'join_waiting',{
            method: 'POST',
            body: JSON.stringify({
                event_id: currentEvent,
                user_id: userId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status === 0){                
                navigate(`/${waitingList}`);
            }else if(data.status === 1){
                // no free places
            }else if(data.status === -1){
                console.error('Data Base Error');
                navigate(`/${errorPage}`);
            }
        })
    }

    const createSpot = () => {
        console.log(spotName);
        console.log(trackLevel);
        if(spotName === ''){
            callbackWrongField('name');
        }else if(coordinates === ''){
            callbackWrongField('coordinates');
        }else if(!trackLevel.length){
            callbackWrongField('level');
        }else{
            fetch(URL + 'create_spot',{
                method: 'POST',
                body: JSON.stringify({
                    name: spotName,
                    levels: trackLevel,
                    coordinnates: coordinates
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    console.error(data.error);
                    navigate(`/${errorPage}`);
                }else{
                    resetAll();
                    navigate(`/${createEvent}`);
                }
            })
        }       
    }
    
    return (
        <div className='d-flex justify-content-center mt-5'>
            <button className='button buttonBottom' onClick={() => {
                if(event === 'create'){
                    createEventFunction();
                }else if(event === 'join'){
                    joinEvent();
                }else if(event === 'unsubscribe'){
                    setActiveModalUnsubscribe(true);
                }else if(event === 'edit'){
                    setActiveModalEdit(true);
                }else if(event === 'joinWaiting'){
                    joinWaiting();
                }else if(event === 'home'){
                    eventsPage();
                }else if(event === 'createSpot'){
                    createSpot();
                }else if(event === 'createEvent'){
                    setCurrentPage('myEvents');
                    navigate(`/${createEvent}`);
                }else{
                    setPageEvent(page);
                }
            }}>
                {name}
            </button>

            <ModalEdit active={activeModalEdit} setActive={setActiveModalEdit}/>
            <ModalUnsubscribe active={activeModalUnsubscribe} setActive={setActiveModalUnsubscribe}/>
        </div>
    );

    function resetAll(){
        setDate('');
        setDateEnd('');
        //setDriver('');
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

export default ButtonEvents;