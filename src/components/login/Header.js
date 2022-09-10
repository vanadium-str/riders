import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';

function Header({name, back}) {

    const { setPass, setPassRepeat, setEmail } = useContext(ridersAppContext);

    let navigate = useNavigate();

    const startPage = () => {
        setEmail('');
        setPass('');
        setPassRepeat('');
        navigate(`/`);
    };

    return (
        <div className='row d-flex align-items-center px-4'>
            <div className='col-6 logo'>
                <span className='colorGreen fw-bold'>in</span>Rideapp
            </div>
            <div className='col-6 text-end mediumTitle'>
                {name} {back ? <img src={arrow} className='cursor' onClick={() => {
                        startPage();
                    }}/>
                    : ''}
            </div>
        </div>
    );
}

export default Header;