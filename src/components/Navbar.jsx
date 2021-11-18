import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  EmailOutlined as EmailIcon
} from '@mui/icons-material';
import styled from 'styled-components';

import logo from 'images/logo.svg';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 1180px) {
    width: 1180px;
  }
`;

export default function Navbar({ isMobile }) {
  return (
    <AppBar
      className="navbar"
      elevation={0}
      position="fixed"
      style={{ backgroundColor: '#ffffff', borderBottom: 'solid 1px #8b63ff' }}
    >
      <Container>
        <Toolbar
          variant={isMobile ? 'dense' : 'regular'}
          style={{
            width: '100%',
            padding: `0px ${isMobile ? 16 + 'px' : 30 + 'px'}`,
            height: isMobile ? null : 64 + 'px'
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                left: 0,
                width: 'auto',
                height: isMobile ? 18 + 'px' : 28 + 'px',
                display: 'block'
              }}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' }, right: 0 }}>
            <IconButton
              size={isMobile ? 'small' : 'large'}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href="https://www.instagram.com/vloom_official/"
            >
              <InstagramIcon fontSize={isMobile ? 'medium' : 'large'} style={{ color: 'grey' }} />
            </IconButton>
            <IconButton
              size={isMobile ? 'small' : 'large'}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="https://www.facebook.com/vloomplay/"
            >
              <FacebookIcon fontSize={isMobile ? 'medium' : 'large'} style={{ color: 'grey' }} />
            </IconButton>
            <IconButton
              size={isMobile ? 'small' : 'large'}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="mailto:kjeonghoon065@gmail.com"
            >
              <EmailIcon fontSize={isMobile ? 'medium' : 'large'} style={{ color: 'grey' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
