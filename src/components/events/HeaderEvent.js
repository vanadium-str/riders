import React, {useContext, useEffect} from 'react';
import { ridersAppContext } from '../../utils/context';

function HeaderEvent({name}) {

    const {setPage} = useContext(ridersAppContext);

    return (
        <div className='col-12 pageTitle'>
            {name}
        </div>
    );
}

export default HeaderEvent;