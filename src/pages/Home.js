import React from 'react';
import { isMobile } from 'react-device-detect';
import webImage from '../images/web.png';
import mobileImage from '../images/mobile.svg';
import logo from '../images/cover.svg';

import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/EmailOutlined';

const Home = () => {
  return (
    <div style={{ width: 100 + '%', height: 100 + 'vh', overflow: 'hidden' }}>
      <AppBar color="transparent" position="fixed">
        <Toolbar variant={isMobile ? 'dense' : 'regular'}>
          <a href="http://www.vloom.co.kr">
            <img src={logo} alt="logo" style={{ height: 40 }} />
          </a>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href="https://www.instagram.com/vloom_official/"
            >
              <InstagramIcon style={{ color: 'white' }} />
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="https://www.facebook.com/vloomplay/"
            >
              <FacebookIcon style={{ color: 'white' }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="mailto:kjeonghoon065@gmail.com"
            >
              <EmailIcon style={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ backgroundImage: 'url(/web.svg)' }}>
        <img
          src={isMobile ? mobileImage : webImage}
          alt={'web image'}
          style={{
            // position: 'relative',
            width: 100 + '%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  );
};

export default Home;
