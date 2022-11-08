import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { events, myRuns } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function UnsubscribeSuccess() {

    const { setPageEvent, setCurrentBlock } = useContext(ridersAppContext);

    const navigate = useNavigate();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center minHeight'>
            <div className='pageTitle mb-5'>
                בוטל בהצלחה
            </div>
            <button className='button' onClick={() => {
                setCurrentBlock('myRuns');
                setPageEvent(myRuns);
                navigate(`/${events}`);
            }}>
                הקפצות שלי
            </button>
        </div>
    );
}
    
export default UnsubscribeSuccess;