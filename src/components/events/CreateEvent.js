import React, {useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';
import { myEvents } from '../../utils/constants';

function CreateEvent({name, events, page}) {

    const {setPage, setPageEvent} = useContext(ridersAppContext);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mediumTitle mb-5 mt-2'>
                    לפתוח הקפצה <img src={arrow} alt='arrow' onClick={() => setPageEvent(myEvents)}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    <input className='inputSignIn text-end' type='datetime-local'/>
                </div>
            </div>
        </div>
    );
}

export default CreateEvent;