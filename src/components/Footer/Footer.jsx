import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './footer.css'

function Footer() {
    return(  
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="toolbar" variant="dense">
              <Typography className="typography-footer" color="inherit" component="div">
                <a className="a-link-footer" href="https://github.com/tatamartinsg" target="_blank">
                    <p className="p-footer-dev">Desenvolvedora: <span>Tássia Martins</span></p>          
                    <GitHubIcon  sx={{ color: '#000000'}} />         
                    <p>GitHub: tatamartinsg</p>
                </a>
              </Typography>
            </Toolbar>
          </AppBar>
      </Box>
    )
}

export default Footer
