function Form(){
    return(
        <div id="Contact">
        <h2 className="big-headers contact-header">Let's talk </h2>
        <p className='contact-text'>I want to hear from you. I'm open to any ideas or collaborations, <br />
        So don't hesitate to reach out!</p> 
        <form action="mailto:yuricodesbotcontact@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
   
        <button type="submit" className="mailbox"> Get in touch! </button>
        </form>
        
      
        </div>
    )
}

export default Form;