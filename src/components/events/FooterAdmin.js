import React, { useContext } from 'react';
import { myEvents, myRuns } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function FooterAdmin() {

    const {currentBlock, setCurrentBlock, setPageEvent} = useContext(ridersAppContext);

    return(
        <div className='container-fluid eventsSwitch'>
            <div className='row text-center'>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'allTrips' ? 'activeEventsSwitchButton' : ''}`}
                        onClick={() => {
                            setCurrentBlock('allTrips');
                            setPageEvent('');
                        }}>
                    כל הקפצות
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'myRuns' ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            setCurrentBlock('myRuns');
                            setPageEvent(myRuns);
                        }}>
                    נרשמתי
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'myEvents' ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            setCurrentBlock('myEvents');
                            setPageEvent(myEvents);
                        }}>
                    פתחתי
                </div>
            </div>
        </div>
    )
}

export default FooterAdmin;