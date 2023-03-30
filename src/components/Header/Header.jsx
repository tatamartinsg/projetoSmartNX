import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './header.css'
import logoSmartNx from '../../assets/header/logoSmartNX.png'

function Header() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="toolbar" variant="dense">
            <Typography color="inherit" component="div">
              <img className="logoSmartNX" src={logoSmartNx}></img>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header
