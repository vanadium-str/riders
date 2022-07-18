import { useState } from 'react';
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';
import example from '../../images/example.jpg';
import AboutEventBlock from '../eventsComponents/AboutEventBlock';
import { week } from '../../utils/constants';
import { TbCaravan, TbCheck } from "react-icons/tb";
import ButtonEvents from '../eventsComponents/ButtonEvents';

function AboutEvent() {

  return (
    <div className='container pe-3'>
        <div className='row text-end fontSizeMedium'>
            <div className='col-12 mediumTitle mb-5 mt-2'>
                משמר העמק <img src={arrow}/>
            </div>
            <div className='col-6'>
                <div className='colorGrey smallText'>
                   מקפיצן
                </div>
                <div className=''>
                    איתן <TbCaravan/>
                </div>
                <div className='smallText'>
                    3 מקומות פנוים
                </div>
            </div>
            <div className='col-6'>
                <div className='rtl mediumTitle'>
                    {/* 15 {week[0]}' */}
                </div>
                <div>
                    18:00-20:00
                </div>
            </div>
            <AboutEventBlock top={'מוביל'} middle={'מקסים גריזנוב'} bottom={'055 271-8504'}/>
            <AboutEventBlock top={'מסלול'} middle={'מסלול שחור 💀'} bottom={'מפה'}/>

            <div className='col-12 row tripDone mt-3'>
                <div className='col-10'>
                    אירוע יתקיים בוודעות. מספיק רוכבים נרשמו
                </div>
                <div className='col-2 iconDoneBig'>
                    <TbCheck/>
                </div>
            </div>
            
            <ButtonEvents name={'הלמן'}/>

            <div className='col-7 text-start ms-3 colorBlue'>
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

            <img src={example} className='mt-3 mb-4'/>

        </div>
    </div>
  );
}

export default AboutEvent;