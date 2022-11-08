import { createLink } from "../../utils/constants";

function AboutEventBlock({ top, middle, bottom, levels, coordinates }) {

  return (
    <div className='col-6 mt-2'>
      <div className='colorGrey smallText'>
        {top}
      </div>

      {middle ? 
        <div>
          {middle}
        </div>
      :
        levels.map((item, key) => {
          return (
            <div key={key}>
              {item === 0 ? 'מתחילים 😚' : (item === 1 ? 'מתקדמים 😈' : 'מקצוענים 💀')}
            </div>
          )
        })
      }

      {bottom ? 
        <div className='colorBlue'>
          <div>
            {bottom}
          </div>
          <div className="cursor" onClick={() => window.open(createLink(coordinates))}>
            איך להגיע
          </div>
        </div>         
      : <></>}

    </div>
  );
}

export default AboutEventBlock;