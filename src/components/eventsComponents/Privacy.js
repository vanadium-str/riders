import React, { useContext, useState } from 'react';
import { ridersAppContext } from '../../utils/context';

function Privacy() {

    const {setPrivacy} = useContext(ridersAppContext);

    const [bottom, setBottom] = useState(true);

    return (
        <div className='d-flex flex-column align-items-center cursor'>
            <div className={`inputSize chooseTopBlock p-2 text-end ${bottom ? 'colorGrey' : 'backgroundBlue'}`} onClick={() => {
                setBottom(false);
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