import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VideoCard from './VideoCard';

function VideoInfo(){
    return(
        <Box sx={{ flexGrow: 1 }}>
     <h1 class="big-headers">Video </h1>
        <Grid container 
         justifyContent="center"
         alignItems="center" 
         spacing={{ xs: 2, md: 2 }} 
        columns={{ xs: 3, sm: 4, md: 6 }}> 
         
         {itemData.map((items, index) => (
             <Grid item xs={4} sm={4} md={3} key={index}>
             <VideoCard
                 key={index}
                 id={index}
                 title={items.title}
                 src={items.img}
                 alt={items.title}
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
        img: '/images/webinar.png',
        title: 'Content creation webinar',
        author: 'YuriCodesBot',
        link: 'https://www.youtube.com/watch?v=jrJMZcFU7_E',
     },
      {
        img: '/images/ASTRO.png',
        title: 'Taking ASTRO for a ride',
        author: 'YuriCodesBot',
        link:'https://www.youtube.com/watch?v=QkY_rZpjEew&t=1s',
    },
    {
        img: '/images/REACTPortfolio.png',
        title: 'Building the first version of this REACT APP',
        author: 'YuriCodesBot',
        link:'https://www.youtube.com/watch?v=n9rAugoiW5o&t=38s',
    },
    {
        img: '/images/HTMLCSS.png',
        title: 'Dropdown Menu With HTML and CSS - Tutorial',
        author: 'YuriCodesBot',
        link:'https://www.youtube.com/watch?v=-Ek00aSFyqU&t=10s',
    }
]

export default VideoInfo;