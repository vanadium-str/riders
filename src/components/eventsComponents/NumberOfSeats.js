import React from 'react';

function NumberOfSeats({ number, name, big }) {
    return (
        <div>
            <div className={`${big ? 'mediumBoldText' : 'fontSizeMedium'}`}>{number}</div>
            <div className='smallText'>{name}</div>
        </div>
        );
    }
    
export default NumberOfSeats;