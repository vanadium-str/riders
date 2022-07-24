import React, {useContext } from 'react';
import { ridersAppContext } from '../../utils/context';
import { TbTrash } from "react-icons/tb";

function RidersList({}) {

    const {setPageEvent} = useContext(ridersAppContext);

    return (
        <div className='row'>
            <div className='col-12 mb-2 d-flex justify-context-end rtl'>
                <div className='fw-bold'>
                    נרשמו   
                </div>
                <div className='colorGrey me-2'>
                    12 \ 15
                </div>
            </div>
            <div className='offset-1 col-2 colorRed'>
                <TbTrash/>  
            </div>
            <div className='col-9 text-end'>
                אפולינריס של המולד  
            </div>
            <div className='offset-1 col-2 colorRed'>
                <TbTrash/>  
            </div>
            <div className='col-9 text-end'>
                אפולינריס של המולד  
            </div>
        </div>
    );
}

export default RidersList;