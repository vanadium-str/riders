import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../redux/slices/eventsDataSlice';
import { setCurrentPage } from '../../redux/slices/pageSlice';
import { events, myEvents, myRuns } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function FooterAdmin() {

    const { currentBlock, setPageEvent, setCurrentBlock } = useContext(ridersAppContext);

    const dispatch = useDispatch();

    return(
        <div className='container-fluid eventsSwitch'>
            <div className='row text-center'>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === 'allTrips' ? 'activeEventsSwitchButton' : ''}`}
                        onClick={() => {
                            dispatch(resetAll());
                            dispatch(setCurrentPage(events));
                            setCurrentBlock('allTrips');
                            setPageEvent('');
                        }}>
                    כל הקפצות
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === myRuns ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            dispatch(resetAll());
                            dispatch(setCurrentPage(myRuns));
                            setCurrentBlock(myRuns);
                            setPageEvent(myRuns);
                        }}>
                    נרשמתי
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentBlock === myEvents ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            dispatch(resetAll());
                            dispatch(setCurrentPage(myEvents));
                            setCurrentBlock(myEvents);
                            setPageEvent(myEvents);
                        }}>
                    פתחתי
                </div>
            </div>
        </div>
    )
}

export default FooterAdmin;