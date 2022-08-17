import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';
import { editPersonalData, events } from '../../utils/constants';

function PersonalData() {

    const { userId, userData, setUserData, setUserId } = useContext(ridersAppContext);

    let navigate = useNavigate();
    
    useEffect(() => {
        fetch('http://www.snowsolutions.me/api/user_info', {
            method: 'POST',
            body: JSON.stringify({
              user_id: userId
            }),
              headers: {
                'Content-Type': 'application/json'
              }
          })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUserData(data);
        })
    }, []);
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mediumTitle mt-2'>
                    {userData.name} <img src={arrow} className='cursor' onClick={() => {
                        navigate(`/${events}`);
                    }}/>
                </div>
                <div className='col-12 mt-2 pe-4 text-end fontSizeMedium'>
                    {userData.phone}
                </div>
                <div className='col-12 mt-2 mb-5 pe-4 text-end fontSizeMedium'>
                    {userData.email}
                </div>
            </div>
            <div className='row pe-4'>
                    <div className='col-12 text-end colorBlue mb-2 cursor fontSizeMedium' onClick={() => navigate(`/${editPersonalData}`)}>
                        שינוי סיסמה
                    </div>
                    <div className='col-12 text-end colorRed cursor fontSizeMedium' onClick={() => {
                        setUserId(-1);
                        navigate(`/`);
                    }}>
                        יציאה
                    </div>
            </div>
        </div>
    );
}
    
export default PersonalData;