
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function WritingCard(props){
    return(
        <div id="Work" className="box-shadow work-box">
            <h3 className='header-txt deep-blue work-title'>{props.title}</h3>
            <a href={props.href} target="_blank" rel="noreferrer" ><img src={props.src} alt={props.title} className="workImg"/></a>
            <p className='work-description'>{props.description} </p>
            <a href={props.href} target="_blank" rel="noreferrer" className='work-icons'><ExitToAppIcon /></a>
        </div>
    )
}

export default WritingCard;