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
        img: '/images/DevRelWriting.png',
        title: 'The importance of documentation in the DevRel space ',
        author: 'YuriCodesBot',
        description: 'Technical writing is an important building block within any community,...',
        link: 'https://www.devrelx.com/post/the-importance-of-documentation-in-the-devrel-space',
     },
      {
        img: '/images/DesignRule.png',
        title: 'The 60:30:10 color rule for web design',
        author: 'YuriCodesBot',
        description: 'Color plays such an important rule in the design of your websites or apps.,...',
        link:'https://yuricodesbot.hashnode.dev/the-603010-color-rule-for-web-design',
    },
    {
        img: '/images/Engagement.png',
        title: 'How to Increase Engagement Within Your Community',
        author: 'YuriCodesBot',
        description: 'Engagement can be defined as the level of commitment users have to a company,...',
        link:'https://www.devrelx.com/post/how-to-increase-engagement-within-your-community',
    },,
    {
        img: '/images/RegEx.png',
        title: 'Ultimate Guide to Regular Expressions (RegEx) on JavaScript',
        author: 'YuriCodesBot',
        description: 'Matching strings? Lookaheads? Flags? ,...',
        link:'https://yuricodesbot.hashnode.dev/ultimate-guide-to-regular-expressions-regex-on-javascript',
    }
]

export default WritingInfo;