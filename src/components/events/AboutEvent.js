import { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import example from '../../images/example.jpg';
import AboutEventBlock from '../eventsComponents/AboutEventBlock';
import { TbCaravan, TbCheck } from "react-icons/tb";
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from '../eventsComponents/HeaderEvent';
import { dateFormatting, dateTorender, events, timeToRender } from '../../utils/constants';
import RidersList from '../eventsComponents/RidersList';

function AboutEvent() {

    const { eventsList, currentEvent, currentPage, admin } = useContext(ridersAppContext);
    
    const event = eventsList.find((value) => {
        return value.event_id === currentEvent;
    })
    const vacancy = event.max_participants - event.booked;
    let date = [];
    dateFormatting(date, event);

    return (
        <div className='container pe-3 minHeight position-relative'>
            <HeaderEvent name={event.spot} back={true} page={events}/>
            <div className='row text-end fontSizeMedium'>
                <div className='col-6'>
                    <div className='colorGrey smallText'>
                       מקפיצן
                    </div>
                    <div className=''>
                        {event.driver} <TbCaravan/>
                    </div>
                    <div className={`smallText ${vacancy < 4 ? 'colorOrange' : ''} ${vacancy === 0 ? 'colorRed' : ''}`}>
                        {vacancy} מקומות פנוים
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
                <AboutEventBlock top={'מוביל'} middle={event.admin} bottom={'055 271-8504'}/>
                <AboutEventBlock top={'מסלול'} middle={'מסלול שחור 💀'} bottom={'מפה'} coordinates={event.coordinates}/>

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
                    <RidersList booked={event.booked} max={event.max_participants} eventId={event.event_id}/>
                : <></>}
                
                {currentPage === 'allEvents' ? <ButtonEvents name={'הזמן'} event={'join'}/>
                : currentPage === 'myRuns' 
                    ? <ButtonEvents name={'בטל'} event={'unsubscribe'}/> 
                    : <ButtonEvents name={'שינוי זמן'} event={'edit'}/>                   
                }
                


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
    );
}

export default AboutEvent;