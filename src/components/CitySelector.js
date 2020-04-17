import React from 'react';

const CitySelector = ({ setCityName, cbClick }) => (
  <div className='formBox'>
    <label>
      City name:{' '}
      <input
        type='text'
        onChange={(e) => setCityName(e.target.value)}
        onKeyUp={(e) => (e.keyCode === 13 ? cbClick() : null)}
        placeholder='eg. London,uk'
      />
    </label>
    <button onClick={() => cbClick()}>OK</button>
  </div>
);

export default CitySelector;
