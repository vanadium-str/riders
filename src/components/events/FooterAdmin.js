import React, { useContext } from 'react';
import { myEvents, myRuns } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function FooterAdmin() {

    const { currentBlock, setPageEvent, setDate, setDateEnd, setDriver, setPrice, setMinPlaces, setMaxPlaces, setPrivacy, setCurrentBlock,
        setSpotId, setTrackLevel, setSpotName, setCoordinates } = useContext(ridersAppContext);

    return(
        <div className='container-fluid eventsSwitch'>
            <div className='row text-center'>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'allTrips' ? 'activeEventsSwitchButton' : ''}`}
                        onClick={() => {
                            resetAll();
                            setCurrentBlock('allTrips');
                            setPageEvent('');
                        }}>
                    כל הקפצות
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'myRuns' ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            resetAll();
                            setCurrentBlock('myRuns');
                            setPageEvent(myRuns);
                        }}>
                    נרשמתי
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'myEvents' ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            resetAll();
                            setCurrentBlock('myEvents');
                            setPageEvent(myEvents);
                        }}>
                    פתחתי
                </div>
            </div>
        </div>
    )

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

export default FooterAdmin;