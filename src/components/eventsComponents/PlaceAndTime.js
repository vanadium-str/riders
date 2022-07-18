import React from 'react';
import { TbCheck } from "react-icons/tb";

function PlaceAndTime({place, timeFrom, timeTo, done}) {
    return (
        <div>
            <div className='d-inline-flex'>
                {done ? 
                    <div className='iconDone'>
                        <TbCheck/>
                    </div>
                : <></>}

                <div className='mediumBoldText'>
                    {place}
                </div>
            </div>
            <div>{timeFrom} - {timeTo}</div>
        </div>
        );
    }
    
export default PlaceAndTime;