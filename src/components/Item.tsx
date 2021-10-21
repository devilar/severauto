import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

interface CardProps {
 item:any;
}
const Item:FC<CardProps> = ({item}) => {
  console.log('item', item)
  return (
    <div>
      {item.title}
    </div>
  );
};

export default Item;