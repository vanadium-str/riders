import React, { useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import InputEventSmall from './InputEventSmall';

function ModalEdit({ active, setActive }) {

    const { date, dateEnd } = useContext(ridersAppContext);

    const editTime = () => {
        console.log(date, dateEnd);
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modalContent ${active ? 'active' : ''} d-flex flex-column justify-content-center`}
                onClick={(e) => e.stopPropagation()}>
                    <div className='d-flex justify-content-center mb-3'>
                        :בחרו זמן חדש
                    </div>
                <div className='d-flex flex-row justify-content-between mb-5'>
                    <InputEventSmall type={'time'} explanation={'זמן סיום'} content={'timeEndEdit'}/>
                    <InputEventSmall type={'time'} explanation={'זמן התחלה'} content={'timeStartEdit'}/>
                </div>
                <div className='d-flex flex-row justify-content-around'>
                    <button className='buttonSmall' onClick={() => editTime()}>
                        שמור
                    </button>
                    <button className='backgroundBlue buttonSmall' onClick={() => {
                        setActive(false);
                    }}>
                        חזור
                    </button>
                </div>
            </div>
        </div>
    );
}
    
export default ModalEdit;