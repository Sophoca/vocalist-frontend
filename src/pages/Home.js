import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';

import contentImage from 'images/content_logo.png';

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
            <Paper>
              <Link to="/chart">Chart</Link>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={contentImage} alt="content" style={{ width: 100 + '%' }} />
      </Grid>
    </Grid>
  );
};

export default Home;
