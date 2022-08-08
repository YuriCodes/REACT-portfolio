function Form(){
    return(
        <div id="Contact">
        <h2 className="big-headers contact-header">Talk to me </h2>
        <p className='contact-text'>I want to hear from you. If you have any ideas or collaborations you'd like to send, i'd love to hear them. <br />
        So don't hesitate to contact me!</p> 
        <form action="mailto:yuricodesbotcontact@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
   
        <button type="submit" className="mailbox"> Get in touch! </button>
        </form>
        
      
        </div>
    )
}

export default Form;