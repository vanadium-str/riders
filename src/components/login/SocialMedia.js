import React from 'react';
import google from '../../images/google.jpg';
import fb from '../../images/fb.jpg';
import apple from '../../images/apple.jpg';

function SocialMedia() {

    return (
        <div className='row'>
            <div className='col-12 text-end px-4 fw-bold mt-3 mb-3'>
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
                    <a href='http://81.28.7.100/google/' onClick={() => {
                        
                    }}>
                        <img src={google} alt='google'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;