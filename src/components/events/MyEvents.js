import React, {useContext, useEffect} from 'react';
import { createEvent } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from '../eventsComponents/HeaderEvent';

function MyEvents() {

    const {setPage} = useContext(ridersAppContext);

    return (
        <div className='container py minHeight'>
            <HeaderEvent name={'הקפצות שפתחתי'} back={false}/>
            <div className='row'>
                <div className='col-12 text-end'>
                    לא נמצאים הקפצות
                </div>
                <div className='buttonBottom'>
                    <ButtonEvents name={'+'} events={true} page={createEvent}/>
                </div>
            </div>
        </div>
    );
}

export default MyEvents;