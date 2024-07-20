

function TalksCard(props){
    return(
        <div id="talks" className="box-shadow talks-box" >
            <h3 className='header-txt deep-blue work-title'>
             <a href={props.href} target="_blank" rel="noreferrer">{props.title}</a>
            </h3>
            <a href={props.href} target="_blank" rel="noreferrer" ></a>
            <p className='talk-description'>{props.description} </p>
        </div>
    )
}

export default TalksCard;