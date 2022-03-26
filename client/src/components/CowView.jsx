import React from 'react';

const CowView = (props) => {
  return (
    <div>
      <h5>Cow:</h5>
      <p onClick={(event) => props.onCowNameClick(event, props.index)}>{props.cow.name}</p>
      <h5>Description:</h5>
      <p>{props.cow.description}</p>
    </div>
  );
}

export default CowView;