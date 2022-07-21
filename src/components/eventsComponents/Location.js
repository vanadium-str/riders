import React from 'react';

function Location({name}) {
    return (
        <div className='col-5 locationBlock'>
            <div className='col-4 colorBlue'>
                מפה
            </div>
            <div className='col-8 text-end fw-bold'>
                {name}
            </div>
        </div>
    );
}
    
export default Location;