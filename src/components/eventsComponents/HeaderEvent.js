import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';

function HeaderEvent({name, back, page}) {

    const { setPageEvent, setCurrentBlock, setSpotId } = useContext(ridersAppContext);

    function resetAll(){
        setSpotId(-1); 
    }

    return (
        <div className='row'>
            <div className={`col-12 ${back ? 'mediumTitle mb-5 mt-2' : 'pageTitle'}`}>
                {name} {back ? <img src={arrow} className='cursor' onClick={() => {
                        if(page === 'events'){
                            setCurrentBlock('allTrips');
                        }else if(page === 'myTrips'){
                            setCurrentBlock('myTrips');
                        }else{
                            setCurrentBlock('myEvents');
                        }
                        resetAll();
                        setPageEvent(page);
                    }}/>
                    : ''}
            </div>
        </div>
    );
}

export default HeaderEvent;