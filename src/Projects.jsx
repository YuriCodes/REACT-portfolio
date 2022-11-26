import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WorkCard from './WorkCard';

function WorkInfo(){
    return(
        <Box sx={{ flexGrow: 1 }}>
     <h1 class="big-headers">Projects </h1>
        <Grid container 
         justifyContent="center"
         alignItems="center" 
         spacing={{ xs: 2, md: 2 }} 
        columns={{ xs: 3, sm: 4, md: 6 }}> 
         
         {itemData.map((items, index) => (
             <Grid item xs={4} sm={4} md={3} key={index}>
             <WorkCard
                 key={index}
                 id={index}
                 title={items.title}
                 src={items.img}
                 alt={items.title}
                description={items.description}
                href={items.link}
                repo={items.repository}
               />        
              </Grid>
                ))}
     
       </Grid>   
       </Box>
         
    )
}


const itemData = [
   
    {
        img: '/images/portfoliopic.png',
        title: 'This site you are on! ',
        author: 'YuriCodesBot',
        description: 'This portfolio was made using React, Material UI, HTML5 and CSS.',
        link: 'https://yuricodesbotdev.netlify.app/',
        repository: 'https://github.com/YuriCodes/REACT-portfolio'
     },
    // {
    //     img: '/images/NewsletterApp.png',
    //     title: 'Newsletter App',
    //     author: 'YuriCodesBot',
    //     description: 'App made with Node.js, Mailchimp API and Express for the back-end. Front-end made with Bootstrap.',
    //     link: 'https://yuricodesbotnewsletterservice.herokuapp.com/',
    //     repository:'https://github.com/YuriCodes/Newsletter-App'
    // },
    // {
    //     img: '/images/Techwriting.png',
    //     title: 'Technical Writing Ideas Generator',
    //     author: 'YuriCodesBot',
    //     description: 'Responsive Web App made with React to fetch writing prompts from a custom made API with a predictive search bar.',
    //     link: 'https://technical-writing-ideas.netlify.app/',
    //     repository:'https://github.com/YuriCodes/article-ideas-app'
    // },
    {
        img: '/images/NASA.png',
        title: 'NASA Archive',
        author: 'YuriCodesBot',
        description: 'Responsive Web App made with React. It utilizes the NASA API to render the images, descriptions and authors.',
        link:'https://nasaphothoarchiveapp.netlify.app/',
        repository:'https://github.com/YuriCodes/NASA-REACT-app'
    }
    
]

export default WorkInfo;