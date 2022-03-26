import React from 'react';
const SelectedCow = (props) => {
  if (props.cow.length > 0) {
    return (
      <div>
      <h3>Cow:</h3>
      <h4>{props.cow[0].name}</h4>
      <h3>Description:</h3>
      <h4>{props.cow[0].description}</h4>
    </div>
    )
  } else {
    return(null);
  }
}
export default SelectedCow;