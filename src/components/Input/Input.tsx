import React, {forwardRef} from 'react';
import TextField from "@material-ui/core/TextField";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from '@mui/material';
import './input.scss';



export const Input = forwardRef((props, ref)=>{
  const {tooltip} = props;
  return (
    <div className='inputContainer'>
    <TextField FormHelperTextProps={{
    style: {
      textAlign: 'center'
    }
  }} inputProps={{min: 0, style: { textAlign: 'center' }}}  variant="outlined" margin="normal" inputRef={ref} fullWidth {...props}/>
      {tooltip && <div className='inputHint'><Tooltip title={tooltip}><HelpOutlineIcon/></Tooltip></div>}
    </div>
  )

})