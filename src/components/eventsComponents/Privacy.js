import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPrivacy } from '../../redux/slices/eventsDataSlice';

function Privacy() {
    const [bottom, setBottom] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='d-flex flex-column align-items-center cursor mb-7'>
            <div className={`inputSize chooseTopBlock p-2 text-end ${bottom ? 'colorGrey' : 'backgroundBlue'}`} onClick={() => {
                setBottom(false);
                dispatch(setPrivacy(0));
            }}>
                <div className='fw-bold'>
                    הקפצה ציבורי
                </div>
                <div className='smallText'>
                    כל אחד יכול להירשם
                </div>
            </div>
            <div className={`inputSize chooseBottomBlock p-2 text-end ${bottom ? 'backgroundBlue' : 'colorGrey'}`} onClick={() => {
                setBottom(true);
                dispatch(setPrivacy(1));
            }}>
                <div className='fw-bold'>
                    הקפצה פרטי
                </div>
                <div className='smallText'>
                    מתאים לקבוצה סגורה של חברים או מתאמנים
                </div>
            </div>
        </div>
    );
}
    
export default Privacy;