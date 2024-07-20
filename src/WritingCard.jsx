
function WritingCard(props){
    return(
        <div id="writing" className="box-shadow writing-box" >
            <h3 className='header-txt deep-blue work-title'>
             <a href={props.href} target="_blank" rel="noreferrer" alt={props.title}>{props.title} </a>
            </h3>
            <a href={props.href} target="_blank" rel="noreferrer" alt={props.title} ></a>
            <p className='work-description'>{props.description} </p>
        </div>
    )
}

export default WritingCard;