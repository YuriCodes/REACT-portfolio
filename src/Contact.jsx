import * as React from 'react';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SiHashnode } from 'react-icons/si';
import { SiTiktok } from 'react-icons/si';

function Contact(){
    return(
         <div style={{ width: '100%' }} className="mobile-no">
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          position: 'fixed',
          p: 2,
          m: 2          
        }}
      >
      <hr className="mobile-no" />
        <a href="https://github.com/YuriCodes" aria-label="Github" title="GitHub" target="_blank" rel="noreferrer" class="desktop-contact"><GitHubIcon /></a>
        <a href="https://twitter.com/yuricodesbot" target="_blank" title="Twitter" aria-label="Twitter" rel="noreferrer" class="desktop-contact"><TwitterIcon /></a>
        <a href="https://www.youtube.com/channel/UCbZvZKwkAmUcfdQGLUqZSeg" title="YouTube" aria-label="YouTube" rel="noreferrer" target="_blank" class="desktop-contact"> <YouTubeIcon /> </a>
        <a href="https://www.tiktok.com/@yuricodesbot" aria-label="TikTok" title="TikTok" target="_blank" rel="noreferrer" class="desktop-contact"><SiTiktok /></a>
        <a href="https://yuricodesbot.hashnode.dev/" aria-label="Hashnode Blog" title="Hashnode" target="_blank" rel="noreferrer" class="desktop-contact"> <SiHashnode /> </a>
       
      </Box>
      
    </div>
       
    )
}

export default Contact;