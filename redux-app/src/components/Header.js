import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Choose a category
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Link to="/" className="navbar-brand">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Date" className="navbar-brand">Date</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Year" className="navbar-brand">Year</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Trivia" className="navbar-brand">Trivia</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Number" className="navbar-brand">Number</Link></MenuItem>
      </Menu>
    </div>
  );
}