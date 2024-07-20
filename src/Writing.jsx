import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WritingCard from './WritingCard';

function WritingInfo(){
    return(
        <Box sx={{ flexGrow: 1 }}>
     <h1 class="big-headers">Writing </h1>
        <Grid container 
         justifyContent="center"
         alignItems="center" 
         spacing={{ xs: 2, md: 2 }} 
        columns={{ xs: 3, sm: 4, md: 6 }}> 
         
         {itemData.map((items, index) => (
             <Grid item xs={4} sm={4} md={3} key={index}>
             <WritingCard
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

        title: 'The importance of documentation in the DevRel space ',
        author: 'YuriCodesBot',
        description: 'Technical writing is an important building block within any community,...',
        link: 'https://www.devrelx.com/post/the-importance-of-documentation-in-the-devrel-space',
     },
      
    {
        title: 'How to Increase Engagement Within Your Community',
        author: 'YuriCodesBot',
        description: 'Engagement can be defined as the level of commitment users have to a company,...',
        link:'https://www.devrelx.com/post/how-to-increase-engagement-within-your-community',
    },
    {
        title: 'Ultimate Guide to Regular Expressions (RegEx) on JavaScript',
        author: 'YuriCodesBot',
        description: 'Matching strings? Lookaheads? Flags? ,...',
        link:'https://yuricodesbot.hashnode.dev/ultimate-guide-to-regular-expressions-regex-on-javascript',
    },
    {
        title: 'What even is a DevRel - Series',
        author: 'YuriCodesBot',
        description: 'In this series, we will cover what is being a Developer Relations Advocate ,...',
        link:'https://yuricodesbot.hashnode.dev/series/what-is-dev-rel',
    },
    {
        title: 'JavaScript for Newbies - Series',
        author: 'YuriCodesBot',
        description: 'In this series, we will clarify the basic concepts and ideas of JavaScript ,...',
        link:'https://yuricodesbot.hashnode.dev/series/javascript-for-newbies',
    },
    {
        title: 'Web Design for Newbies - Series',
        author: 'YuriCodesBot',
        description: 'In this series, we will be sharing tips, tricks and more about Web Design ,...',
        link:'https://yuricodesbot.hashnode.dev/series/web-design-for-beginners',
    }
]

export default WritingInfo;