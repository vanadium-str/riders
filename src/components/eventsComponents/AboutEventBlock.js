import { createLink } from "../../utils/constants";

function AboutEventBlock({ top, middle, bottom, coordinates }) {

  return (
    <div className='col-6 mt-2'>
      <div className='colorGrey smallText'>
        {top}
      </div>
      <div className=''>
        {middle}
      </div>
      <div className='colorBlue' onClick={() => {
        if(bottom === 'מפה'){
          window.open(createLink(coordinates));
        }
      }}>
        {bottom}
      </div>
    </div>
  );
}

export default AboutEventBlock;