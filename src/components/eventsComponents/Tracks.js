import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';

function Tracks({ empty }) {

    const { trackLevel, setTrackLevel } = useContext(ridersAppContext);
  
    const checkArray = (id) => {
        if(trackLevel.includes(id)){
            let index = trackLevel.indexOf(id);
            trackLevel.splice(index, 1);
            setTrackLevel([...trackLevel]);       
        }else{
            setTrackLevel([...trackLevel, id]);
        }
    }

    return (
        <div className='col-12 d-flex justify-content-center'>
            <div className='trackBlock row'>
                <div className={`col-4 d-flex flex-column justify-content-center align-items-center ${empty ? 'inputWrong' : ''}
                            ${trackLevel.includes(2) ? 'backgroundGrey' : ''}`} onClick={() => {
                    checkArray(2);
                }}>
                    <div className='emoji'>
                        💀
                    </div>
                    <div>
                        מקצוענים
                    </div>
                </div>
                <div className={`col-4 d-flex flex-column justify-content-center align-items-center
                            ${trackLevel.includes(1) ? 'backgroundGrey' : ''}`} onClick={() => {
                    checkArray(1);
                }}>
                    <div className='emoji'>
                        😈
                    </div>
                    <div className='colorRed'>
                        מתקדמים
                    </div>
                </div>
                <div className={`col-4 d-flex flex-column justify-content-center align-items-center py-2
                            ${trackLevel.includes(0) ? 'backgroundGrey' : ''}`} onClick={() => {
                    checkArray(0);
                }}>
                    <div className='emoji'>
                        😚
                    </div>
                    <div className='inputMessageGreen'>
                        מתחילים
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tracks;