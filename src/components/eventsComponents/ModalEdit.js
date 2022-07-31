import React from 'react';
import InputEvent from '../eventsComponents/InputEvent';

function ModalEdit({ active, setActive }) {
    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modalContent ${active ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <InputEvent/>
            </div>
        </div>
    );
}
    
export default ModalEdit;