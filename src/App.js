import Header from './Header'
import WorkInfo from './Projects';
import Intro from './Intro';
import Contact from './Contact';
import Container from '@mui/material/Container';
import Form from './ContactForm';
import MobileContact from './Mobile-contact';
import Footer from './Footer';

function App() {
  return(

    <div>    
     <Contact />  
    
     <Container maxWidth="md">
    <Header />
    <Intro />
   </Container>
  
   <Container maxWidth="md">
     <WorkInfo />  
     
    <Form />
    <MobileContact /> 
    <Footer />
   </Container>
  
    
    </div>

  )
}

export default App;
