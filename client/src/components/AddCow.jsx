import React from 'react';
const AddCow = (props) => {
  return(
    <div>
      <input className='cow-name-input' type='text' placeholder='Input Cow Name Here' onChange={(event) => props.onCowNameInputChange(event)}></input>
      <textarea className='cow-name-input' type='text' placeholder='Input Cow Description Here' onChange={(event) => props.onCowDescriptionInputChange(event)}></textarea>
      <button className='button' onClick={() => props.onCowSubmitClick()}>Submit Cow!</button>
    </div>
  );
}

export default AddCow;