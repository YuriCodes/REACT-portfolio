
function WritingCard(props){
    return(
        <div id="Work" className="box-shadow work-box">
            <h3 className='header-txt deep-blue work-title'>{props.title}</h3>
            <a href={props.href} target="_blank" rel="noreferrer" ><img src={props.src} alt={props.title} className="workImg"/></a>
         </div>
    )
}

export default WritingCard;