import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setCurrentPage } from '../../redux/slices/pageSlice';
import { events, myRuns } from '../../utils/constants';

function UnsubscribeSuccess() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center minHeight'>
            <div className='pageTitle mb-5'>
                בוטל בהצלחה
            </div>
            <button className='button' onClick={() => {
                dispatch(setCurrentPage(myRuns));
                navigate(`/${events}`);
            }}>
                הקפצות שלי
            </button>
        </div>
    );
}
    
export default UnsubscribeSuccess;