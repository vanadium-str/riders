import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { events } from '../../utils/constants';
import { ridersAppContext } from '../../utils/context';

function ErrorPage() {

    const { setPageEvent, setCurrentBlock } = useContext(ridersAppContext);

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='col-12 pageTitle my-5 me-3'>
                404
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div>
                    Oops...
                </div>
                <div>
                    Something went wrong 😢
                </div>
                <button className='buttonSmall mt-5' onClick={() => {
                    setCurrentBlock('allTrips');
                    setPageEvent('');
                    navigate(`/${events}`);
                }}>
                    חזור
                </button>                
            </div>
        </div>
    );
}
    
export default ErrorPage;