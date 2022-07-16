import React, {useContext, useEffect} from 'react';
import { createEvent } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';
import ButtonEvents from '../eventsComponents/ButtonEvents';
import HeaderEvent from './HeaderEvent';

function MyEvents() {

    const {setPage} = useContext(ridersAppContext);

    return (
        <div className='container py-3'>
            <div className='row'>
                <HeaderEvent name={'הקפצות שפתחתי'}/>
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