import React from 'react';
import {Button} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import { red, blue } from '@material-ui/colors';
import './button.scss';



export const Btn = ({children, ...props}) =>{

  return <Button variant="contained" {...props}>{children}</Button>
}