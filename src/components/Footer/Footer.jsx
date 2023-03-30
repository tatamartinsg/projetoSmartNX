import GitHubIcon from '@mui/icons-material/GitHub';

import './footer.css'

function Footer() {
    return(
        <div className="div-footer">
           <a className="a-link-footer" href="https://github.com/tatamartinsg">
                <p>Desenvolvedora: Tássia Martins</p>             
                <GitHubIcon  sx={{ color: '#000000'}} />         
                <p>GitHub: tatamartinsg</p>
            </a>
        </div>
    )
}

export default Footer
