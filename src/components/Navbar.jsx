import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  EmailOutlined as EmailIcon
} from '@mui/icons-material';

import logo from 'images/logo.png';

export default function Navbar({ isMobile }) {
  return (
    <AppBar
      elevation={0}
      position="static"
      style={{ backgroundColor: '#ffffff', borderBottom: 'solid 1px #8b63ff' }}
    >
      <Toolbar
        variant={isMobile ? 'dense' : 'regular'}
        style={{
          padding: `0px ${isMobile ? 16 + 'px' : 20 + 'px'}`,
          height: isMobile ? null : 64 + 'px'
        }}
      >
        <a href="http://www.vloom.co.kr" target="_blank">
          <img
            src={logo}
            alt="logo"
            style={{ width: 'auto', height: isMobile ? 20 + 'px' : 32 + 'px', display: 'block' }}
          />
        </a>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { md: 'flex' } }}>
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
    </AppBar>
  );
}
