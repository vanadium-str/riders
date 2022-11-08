import React from 'react';
import { useNavigate } from "react-router-dom";
import arrow from '../../images/Arrow.jpg';
import { useDispatch } from 'react-redux';
import { setEmail, setPass, setPassRepeat } from '../../redux/slices/userSlice';

function Header({name, back}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const startPage = () => {
        dispatch(setEmail(''));
        dispatch(setPass(''));
        dispatch(setPassRepeat(''));
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