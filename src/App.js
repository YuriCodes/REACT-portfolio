import Header from './Header'
import WorkInfo from './Projects';
import Intro from './Intro';
import Contact from './Contact';
import Container from '@mui/material/Container';
import Form from './ContactForm';
import MobileContact from './Mobile-contact';
import Footer from './Footer';
import WritingInfo from './Writing';
import VideoInfo from './Videos'
import TalksInfo from './Talks';

function App() {
  return(

    <div>    
     <Contact />  
    
     <Container maxWidth="md">
    <Header />
    <Intro />
   </Container>
  
   <Container maxWidth="md">
  
  
     <WritingInfo />
     <TalksInfo />
     <VideoInfo/>
     <WorkInfo />  

    <Form />
    <MobileContact /> 
    <Footer />
   </Container>
  
    
    </div>

  )
}

export default App;
