import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TalksCard from './TalksCard';

function TalksInfo(){
    return(
        <Box sx={{ flexGrow: 1 }}>
     <h1 class="big-headers">Talks </h1>
        <Grid container 
         justifyContent="center"
         alignItems="center" 
         spacing={{ xs: 2, md: 2 }} 
        columns={{ xs: 3, sm: 4, md: 6 }}> 
         
         {itemData.map((items, index) => (
             <Grid item xs={4} sm={4} md={3} key={index}>
             <TalksCard
                 key={index}
                 id={index}
                 title={items.title}
                 src={items.img}
                 alt={items.title}
                description={items.description}
                href={items.link}
               />        
              </Grid>
                ))}
     
       </Grid>   
       </Box>
         
    )
}


const itemData = [
   
    {

        title: 'Google Dev Fest - Santo Domingo - Spanish ',
        author: 'YuriCodesBot',
        description: 'Accessibility first development',
        link: 'https://www.youtube.com/watch?v=oaFRuLrDjiY',
     },
      
    {
        title: 'FreeCodeCamp  - Podcast - Ep 10 - Spanish',
        author: 'YuriCodesBot',
        description: 'From Law to DevRel',
        link:'https://www.freecodecamp.org/espanol/news/yury-santana-rompiendo-los-esquemas-de-derecho-a-devrel-alguien-en-quien-nos-podemos-ver-reflejados/',
    },
    {
        title: 'GitHub - Content Creation for Developers - Spanish ',
        author: 'YuriCodesBot',
        description: 'How to, tips and tricks',
        link:'https://www.youtube.com/live/06qqoVNempY?si=bg_irno8z9mptbWo',
    },
    {
        title: 'Mangu Tecnologico - Podcast -  Spanish',
        author: 'YuriCodesBot',
        description: 'The value of Accessibility',
        link:'https://youtu.be/cd1EwEZ9pMY?si=0CKgxjQtkPVoS-Cq',
    }
]

export default TalksInfo;