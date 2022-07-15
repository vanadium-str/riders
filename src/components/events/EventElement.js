import React, {useContext, useEffect} from 'react';
import { TbCaravan } from "react-icons/tb";
import { ridersAppContext } from "../../utils/context";
import NumberOfSeats from '../eventsComponents/NumberOfSeats';
import PlaceAndTime from '../eventsComponents/PlaceAndTime';

function EventElement() {

    const {eventsList} = useContext(ridersAppContext);

    return(
        <div className='container backgroundElement my-1 p-2'>
            <div className='row text-end d-flex align-items-end'>
                <div className='col-2'>
                    <NumberOfSeats number={15} name={'מתוך'} big={false}/>
                </div>
                <div className='col-2'>
                    <NumberOfSeats number={0} name={'פנוי'} big={true}/>
                </div>
                <div className='col-2'>
                    <NumberOfSeats number={15} name={'בהמתנה'} big={true}/>
                </div>
                <div className='col-6'>
                   <PlaceAndTime place={'משמר העמק'} timeFrom={'12:00'} timeTo={'15:00'}/>
                </div>
                <div className='col-12 colorGrey'>
                    איתן <TbCaravan/>
                </div>
            </div>
        </div>
    );
}

export default EventElement;