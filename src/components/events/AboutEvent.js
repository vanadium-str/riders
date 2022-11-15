import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import example from '../../images/example.jpg';
import AboutEventBlock from '../eventsComponents/AboutEventBlock';
import { TbCaravan, TbCheck, TbTrash } from "react-icons/tb";
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import { dateFormatting, dateTorender, events, myEvents, myRuns, timeToRender } from '../../utils/constants';
import RidersList from '../eventsComponents/RidersList';
import ModalDeleteEvent from '../eventsComponents/ModalDeleteEvent';
import { useSelector } from 'react-redux';
import { eventsListSelector, userAdminSelector, myEventsSelector, myRunsSelector, currentPageSelector } from '../../redux/selectors';

function AboutEvent() {

    const [activeModalDeleteEvent, setActiveModalDeleteEvent] = useState(false);
    const [event, setEvent] = useState({});

    let { idEvent } = useParams();
    const admin = useSelector(userAdminSelector);
    const eventsList = useSelector(eventsListSelector);
    const myRunsList = useSelector(myRunsSelector);
    const myEventsList = useSelector(myEventsSelector);
    const currentPage = useSelector(currentPageSelector);

    useEffect(() => {
        let filteredArray = [];
        if(currentPage === myEvents) {
            filteredArray = myEventsList.find((value) => {
                return value.event_id == idEvent;
            })
            setEvent(filteredArray);
        } else if(currentPage === myRuns) {
            filteredArray = myRunsList.find((value) => {
                return value.event_id == idEvent;
            })
            setEvent(filteredArray);
        } else if(currentPage === events) {
            filteredArray = eventsList.find((value) => {
                return value.event_id == idEvent;
            })
            setEvent(filteredArray);
        }
    }, [currentPage])
    
    let date = [];
    const vacancy = event.max_participants - event.booked;
    dateFormatting(date, event);

    return (
        event.levels ?

            <div className='container pe-3 minHeight position-relative'>
                <HeaderEvent name={event.spot} back={true} page={'aboutTrip'}/>
                <div className='row text-end fontSizeMedium'>
                    <div className='col-6'>
                        <div className='colorGrey smallText'>
                        מקפיצן
                        </div>
                        <div className=''>
                            {event.driver} <TbCaravan/>
                        </div>
                        <div className={`smallText ${vacancy < 4 ? 'colorOrange' : ''} ${vacancy === 0 ? 'colorRed' : ''}`}>
                            {vacancy === 0 ? event.waiting : vacancy} {vacancy === 0 ? 'בהמתנה' : 'מקומות פנוים'}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='rtl mediumTitle'>
                            {dateTorender(date[0])}
                        </div>
                        <div>
                            {timeToRender(event.time_start)} - {timeToRender(event.time_end)}
                        </div>
                    </div>
                    <AboutEventBlock top={'מוביל'} middle={event.admin}
                        bottom={'055 271-8504'} coordinates={event.coordinates}/>
                    <AboutEventBlock top={'מסלול'} levels={event.levels}/>

                    {event.min_participants <= event.booked ? 
                        <div className='col-12 row tripDone mt-3'>
                            <div className='col-10'>
                                אירוע יתקיים בוודעות. מספיק רוכבים נרשמו
                            </div>
                            <div className='col-2 iconDoneBig'>
                                <TbCheck/>
                            </div>
                        </div>                
                    : <></>}

                    {event.booked && admin && currentPage === 'myEvents' ? 
                        <RidersList booked={event.booked}
                            max={event.max_participants} eventId={event.event_id}/>
                    : <></>}
                    
                    {currentPage === 'allEvents' ? <ButtonEvents name={'הזמן'} event={'join'}/>
                    : currentPage === myRuns 
                        ? <ButtonEvents name={'בטל'} event={'unsubscribe'}/> 
                        : 
                        <div>
                            <div>
                                <ButtonEvents name={'שינוי זמן'} event={'edit'}/>
                            </div>
                            <div className='buttonBottom deleteButton' onClick={() => setActiveModalDeleteEvent(true)}>
                                <TbTrash/>
                            </div>
                        </div>                 
                    }
                    
                    <ModalDeleteEvent active={activeModalDeleteEvent} setActive={setActiveModalDeleteEvent} event={event} date={date}/>

                    {/* <div className='col-7 text-start ms-3 colorBlue'>
                        צפו בעוד
                    </div>
                    <div className='col-1 colorGrey'>
                        32
                    </div>
                    <div className='col-3 fw-bold'>
                        תמונות
                    </div>

                    <img src={example} className='mt-3 mb-4'/>

                    <div className='col-12 text-end fw-bold'>
                        איך להגיע ל
                    </div>

                    <img src={example} className='mt-3 mb-4'/> */}
                </div>
            </div>

        :                 
            <div className='d-flex justify-content-center mt-5'>
                <div className="spinner-border" role="status"/>
            </div>
    );
}

export default AboutEvent;