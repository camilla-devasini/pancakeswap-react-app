import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from 'react-router-dom';
import "./style/liveFinished.scss"

function LiveFinished() {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Live', value: '1' },
    { name: 'Finished', value: '2' },
    
  ];

  return (
    <>
    
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          
          <ToggleButton 
          
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="live"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
     
            {radio.name}

          </ToggleButton>
       
        ))}
      </ButtonGroup>
      
   
     
     
    </>
  );
}

export default LiveFinished ;