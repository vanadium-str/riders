import React, {useContext, useEffect} from 'react';
import { ridersAppContext } from '../../utils/context';

function InputMessage({wrongMessage, green}) {

    const {setPage} = useContext(ridersAppContext);

    return (
        <p className={`inputMessage me-4 ${green ? 'inputMessageGreen' : ''}`}>{wrongMessage}</p>
    );
}

export default InputMessage;