import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import webImage from 'images/web.png';
import mobileImage from 'images/mobile.svg';

const Background = styled.div`
  width: 100%;
  min-width: ${isMobile ? '0' : '600px'};
  height: 100vh;
  // background-image: url(${isMobile ? mobileImage : webImage});
  // background-size: cover;
  // background-position: top center;
`;

const Container = styled.div`
  max-width: ${isMobile ? '100%' : '1080px'};
  margin: ${isMobile ? null : '0 auto'};
  padding: ${isMobile ? '10px' : '20px 30px'};
`;

const Home = () => {
  return (
    <Background>
      <Navbar isMobile={isMobile} />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper>Blooming Your voice!</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>Description</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>Google Store</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>App Store</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>Experience</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>Chart</Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>Image</Paper>
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default Home;
