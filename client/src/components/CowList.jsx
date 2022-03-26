import React from 'react';
import CowView from './CowView.jsx';
const CowList = (props) => {
  return(
    <div className='cows-container'>
      {props.cowList.map((cow, index) => {
        return <CowView cow={cow} key={`cow${index}`} index={index} onCowNameClick={props.onCowNameClick}/>
      })}
    </div>
  );
}

export default CowList;