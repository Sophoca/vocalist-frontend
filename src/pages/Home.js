import React from 'react';
import { isMobile } from 'react-device-detect';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  EmailOutlined as EmailIcon
} from '@mui/icons-material';
import styled from 'styled-components';

import webImage from 'images/web.png';
import mobileImage from 'images/mobile.svg';
import logo from 'images/cover.svg';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${isMobile ? mobileImage : webImage});
  background-size: cover;
  background-position: top center;
`;

const Container = styled.div`
  max-width: ${isMobile ? '100%' : '1080px'};
`;

const Home = () => {
  return (
    <Background>
      <AppBar color="transparent" position="static">
        <Toolbar variant={isMobile ? 'dense' : 'regular'}>
          <a href="http://www.vloom.co.kr">
            <img src={logo} alt="logo" style={{ height: isMobile ? 30 : 40 }} />
          </a>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
            <IconButton
              size={isMobile ? 'small' : 'large'}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href="https://www.instagram.com/vloom_official/"
            >
              <InstagramIcon fontSize={isMobile ? 'medium' : 'large'} style={{ color: 'white' }} />
            </IconButton>
            <IconButton
              size={isMobile ? 'small' : 'large'}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="https://www.facebook.com/vloomplay/"
            >
              <FacebookIcon fontSize={isMobile ? 'medium' : 'large'} style={{ color: 'white' }} />
            </IconButton>
            <IconButton
              size={isMobile ? 'small' : 'large'}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="mailto:kjeonghoon065@gmail.com"
            >
              <EmailIcon fontSize={isMobile ? 'medium' : 'large'} style={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>home</Container>
    </Background>
  );
};

export default Home;
