import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentPageSelector } from '../../redux/selectors';
import { resetAll } from '../../redux/slices/eventsDataSlice';
import { setCurrentPage } from '../../redux/slices/pageSlice';
import { events, myEvents, myRuns } from '../../utils/constants';

function FooterAdmin() {

    const dispatch = useDispatch();
    const currentPage = useSelector(currentPageSelector);

    return(
        <div className='container-fluid eventsSwitch'>
            <div className='row text-center'>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentPage === events ? 'activeEventsSwitchButton' : ''}`}
                        onClick={() => {
                            dispatch(resetAll());
                            dispatch(setCurrentPage(events));
                        }}>
                    כל הקפצות
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentPage === myRuns ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            dispatch(resetAll());
                            dispatch(setCurrentPage(myRuns));
                        }}>
                    נרשמתי
                </div>
                <div className={`col-4 d-flex justify-content-center align-items-center
                            ${currentPage === myEvents ? 'activeEventsSwitchButton': ''}`}
                        onClick={() => {
                            dispatch(resetAll());
                            dispatch(setCurrentPage(myEvents));
                        }}>
                    פתחתי
                </div>
            </div>
        </div>
    )
}

export default FooterAdmin;