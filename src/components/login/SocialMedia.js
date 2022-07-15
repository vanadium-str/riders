import React, {useContext, useEffect} from 'react';
import { ridersAppContext } from '../../utils/context';
import google from '../../images/google.jpg';
import fb from '../../images/fb.jpg';
import apple from '../../images/apple.jpg';

function SocialMedia() {

    const {setPage} = useContext(ridersAppContext);

    return (
        <div className='row'>
            <div className='col-12 text-end px-4 fw-bold mt-5 mb-3'>
                כניסה דרך
            </div>
            <div className='d-flex justify-content-center'>
                <div className='col-4 socialMediaBlock cursor'>
                    <img src={apple} alt='apple'/>
                </div>
                <div className='col-4 socialMediaBlock cursor'>
                    <img src={fb} alt='facebook'/>
                </div>
                <div className='col-4 socialMediaBlock cursor'>
                    <img src={google} alt='google'/>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;