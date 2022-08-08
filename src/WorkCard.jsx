import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function WorkCard(props){
    return(
        <div id="Work" className="box-shadow work-box">
            <h3 className='header-txt deep-blue work-title'>{props.title}</h3>
            <a href={props.href} target="_blank" rel="noreferrer" ><img src={props.src} alt={props.title} className="workImg"/></a>
            <p className='work-description'>{props.description} </p>
            <a href={props.href} target="_blank" rel="noreferrer" className='work-icons'><ExitToAppIcon /></a>
            <a href={props.repo} target="_blank" rel="noreferrer" className='work-icons'><GitHubIcon /> </a>
        </div>
    )
}

export default WorkCard;