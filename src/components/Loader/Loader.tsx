import React, { useState } from 'react';
import './loader.scss';

const Loader = () => {



  return (
    <div className='lds-container'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;