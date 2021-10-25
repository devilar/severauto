import React, {forwardRef} from 'react';
import TextField from "@material-ui/core/TextField";




export const Input = forwardRef((props, ref)=>{
  return <TextField FormHelperTextProps={{
    style: {
      textAlign: 'center'
    }
  }} inputProps={{min: 0, style: { textAlign: 'center' }}}  variant="outlined" margin="normal" inputRef={ref} fullWidth {...props}/>
})