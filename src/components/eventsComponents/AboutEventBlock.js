import { useState } from 'react';
import { ridersAppContext } from '../../utils/context';
import { TbCaravan } from "react-icons/tb";

function AboutEventBlock({top, middle, bottom}) {

  return (
    <div className='col-6 mt-2'>
      <div className='colorGrey smallText'>
        {top}
      </div>
      <div className=''>
        {middle}
      </div>
      <div className='colorBlue'>
        {bottom}
      </div>
    </div>
  );
}

export default AboutEventBlock;