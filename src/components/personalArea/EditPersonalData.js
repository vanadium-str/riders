import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ridersAppContext } from '../../utils/context';
import arrow from '../../images/Arrow.jpg';
import { errorPage, personalArea } from '../../utils/constants';
import InputChangePass from './InputChangePass';

function EditPersonalData() {

    const { userId, pass, passRepeat, setPass, setPassRepeat, oldPass, setOldPass } = useContext(ridersAppContext);

    const [wrongOldPass, setWrongOldPass] = useState(false);
    const [wrongNewPass, setWrongNewPass] = useState(false);

    let navigate = useNavigate();

    const changeData = () => {
        console.log(userId)
        console.log(pass)
        console.log(oldPass)
        fetch('http://www.snowsolutions.me/api/user_update', {
            method: 'PUT',
            body: JSON.stringify({
              user_id: userId,
              password: oldPass,
              new_password: pass
            }),
              headers: {
                'Content-Type': 'application/json'
              }
          })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status === 0){

            }else if(data.status === 1){
                //user not found
            }else if(data.status === 2){
                //password incorrect
            }else if(data.status === -1){
                console.error('Data Base Error');
                navigate(`/${errorPage}`);
            }
        })
    }

    function callbackSetPass(content, event){
        if(content === 'oldPass'){
            setOldPass(event);
        }else if(content === 'newPass'){
            setPass(event);
        }else if(content === 'repeatPass'){
            setPassRepeat(event);
        }
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mediumTitle mt-2 mb-5'>
                    שנה נתונים <img src={arrow} className='cursor' onClick={() => {
                        navigate(`/${personalArea}`);
                    }}/>
                </div>
                <InputChangePass name={'סיסמה נוכחית'} content={'oldPass'} callbackSetPass={callbackSetPass}
                                    wrong={wrongOldPass} wrongMessage={'הזנה שגויה'}/>
                <InputChangePass name={'סיסמה חדשה'} content={'newPass'} callbackSetPass={callbackSetPass} wrong={wrongNewPass}/>
                <InputChangePass name={'הזנה'} content={'repeatPass'} callbackSetPass={callbackSetPass}
                                wrong={wrongNewPass} wrongMessage={'הזנה שגויה'}/>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <button className='button buttonBottom' onClick={() => {
                    if(oldPass === ''){
                        setWrongOldPass(true);
                    }else if(pass === '' || passRepeat === '' || pass !== passRepeat || pass === oldPass){
                        setWrongNewPass(true);
                    }else{
                        setWrongOldPass(false);
                        setWrongNewPass(false);
                        changeData();
                    }
                }}>
                    Save
                </button>
            </div>
        </div>
    );
}
    
export default EditPersonalData;