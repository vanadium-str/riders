import React from 'react';

function AddRider({places}) {
    return (
        <div className='col-12 d-flex align-items-center flex-column heightInput mb-5'>
            <div className='inputSize position-relative'>
                <div className='invite' onClick={() => {
                        
                }}>
                    הזמן
                </div>
                <input className='inputSignIn' placeholder={'שם'} type='text' onChange={(event) => {
                   
                }}/>
                <p className='smallText colorGrey text-end me-3'>
                     עוד {places} מקומות פנוים
                </p>
            </div>
        </div>
    );
}
    
export default AddRider;