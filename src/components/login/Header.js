import React, {useContext, useEffect} from 'react';
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';

function Header({name, back}) {

    const {setPage, setPass, setPassRepeat, setEmail} = useContext(ridersAppContext);

    return (
        <div className='row d-flex align-items-center px-4'>
            <div className='col-6 logo'>
                Rideapp
            </div>
            <div className='col-6 text-end mediumTitle'>
                {name} {back ? <img src={arrow} className='cursor' onClick={() => {
                        setEmail('');
                        setPass('');
                        setPassRepeat('');
                        setPage('');
                    }}/>
                    : ''}
            </div>
        </div>
    );
}

export default Header;