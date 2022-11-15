import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';
import { allEvents, createEvent, events, myEvents, myRuns, personalArea } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { resetAll } from '../../redux/slices/eventsDataSlice';
import { currentPageSelector } from '../../redux/selectors';

function HeaderEvent({ name, back, page }) {

    const { setPageEvent, setCurrentBlock } = useContext(ridersAppContext);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentPage = useSelector(currentPageSelector);

    return (
        <div className='row'>
            {back ? <></> : 
            <div className='col-4 d-flex align-items-center cursor ps-4'
                onClick={() => {
                    navigate(`/${personalArea}`);
                    dispatch(resetAll());
                }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22C2 20.5 2.2012 20.477 6.57422 16.6367C6.57422 16.6367 7.69141 18.3594 8.25781 19.1992C9.24587 20.423 10.2033 20.5 12 20.5C14.9987 20.5 15.0841 20.104 17.5518 16.7554C21.9248 20.5957 22 20.5 22 22H12H2Z" fill="#6576CC"/>
                    <path d="M12 19C10.0491 19 9.83048 18.8651 9.32643 18.1009C8.75134 17.229 6.48403 13.7618 6 12.9822C5.56135 12.2756 5.5 10.6866 5.5 7.95412C5.5 4 9.00001 2 12 2C15 2 18.5 4 18.5 7.95412C18.5 10.6866 18.4387 12.2756 18 12.9822C17.516 13.7618 15.2487 17.229 14.6736 18.1009C14.1695 18.8651 13.9509 19 12 19Z" fill="#6576CC"/>
                    <path d="M11 13L8.94131 14.7693C8.27985 13.7312 7 11.7966 7 11.7966V8.5C7 8.5 9.48976 9.5 12 9.5C14.5102 9.5 17 8.5 17 8.5V11.7966C17 11.7966 15.7201 13.7312 15.0587 14.7693L13 13H12H11Z" fill="white"/>
                </svg>

            </div>}
            <div className={`${back ? 'col-12 mediumTitle mb-5 mt-2' : 'col-8 pageTitle'}`}>
                {name} {back ? <img src={arrow} className='cursor' onClick={() => {

                        if(page === 'aboutTrip'){
                            if(currentPage === 'allEvents'){
                                setCurrentBlock('allTrips');
                                setPageEvent(allEvents);
                            }else if(currentPage === myRuns){
                                setCurrentBlock(myRuns);
                                setPageEvent(myRuns);
                            }else if(currentPage === myEvents){
                                setCurrentBlock(myEvents);
                                setPageEvent(myEvents);
                            }
                            navigate(`/${events}`);
                        }else if(page === 'createEvent'){
                            navigate(`/${createEvent}`);
                        }else{
                            if(page === 'events'){
                                setCurrentBlock('allTrips');
                            }else if(page === 'myTrips'){
                                setCurrentBlock('myTrips');
                            }else{
                                setCurrentBlock(myEvents);
                            }
                            dispatch(resetAll());
                            setPageEvent(page);
                        }
                        
                    }}/>
                    : ''}
            </div>
        </div>
    );
}

export default HeaderEvent;