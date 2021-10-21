import React, {FC} from 'react';
import { Button } from '@mui/material';

interface CardProps {
    width:string;
    height:string;
    children:React.ReactChild | React.ReactNode;
    onClick:(num: number)=>void;
}


const Test: FC<CardProps> = ({width,height,children, onClick}) => {
    return (
        <div style = {{width,height, background:'gray'}}>
            {children}
            <Button onClick={()=>onClick(15)}>Click!</Button>
        </div>

    );
};

export default Test;