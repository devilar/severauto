import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import PersonIcon from '@mui/icons-material/Person';
import { Btn } from '../Button/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  const person = "Ivan";
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <div className='person_inner' onClick={handleClick}>
          <div>{person}</div><PersonIcon/>
        </div>
        {open ? (
          <Box sx={styles}>
            <nav>
              <ul>
                <li><Btn fullWidth className='active'><Link to="/admin/ostatki">Открыть профиль</Link></Btn></li>
                <li><Btn fullWidth><Link to="/admin/postavshiki">Выход</Link></Btn></li>

              </ul>
            </nav>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}