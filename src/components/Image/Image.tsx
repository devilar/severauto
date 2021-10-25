import React from 'react';

const Image = ({ src, ...props }) => {
  return (
  <img src={src} {...props}/>
  );
};

export default Image;