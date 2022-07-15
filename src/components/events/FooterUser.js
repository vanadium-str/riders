import React, {useContext, useEffect} from 'react';
import { ridersAppContext } from '../../utils/context';

function FooterUser() {

    const {currentBlock, setCurrentBlock, setPageEvent} = useContext(ridersAppContext);

    return(
        <div className='container-fluid eventsSwitch'>
            <div className='row text-center'>
                <div className={`col-6 d-flex justify-content-center align-items-center
                            ${currentBlock === 'allTrips' ? 'activeEventsSwitchButton' : ''}`}
                            onClick={() => {
                                setCurrentBlock('allTrips');
                                setPageEvent('');
                            }}>
                    כל הקפצות
                </div>
                <div className={`col-6 d-flex justify-content-center align-items-center
                            ${currentBlock === 'myTrips' ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => setCurrentBlock('myTrips')}>
                    נרשמתי
                </div>
            </div>
        </div>
    )
}

export default FooterUser;