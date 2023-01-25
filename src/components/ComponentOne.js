import React from 'react';

const ComponentOne = (props) => {
    const {handleOpenModal} = props;

  return (
    <div>
        <p>ComponentOne</p>
        <button onClick={handleOpenModal}>Click</button>
    </div>
  )
}

export default ComponentOne