import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';
import styled from 'styled-components';
// Core modules imports are same as usual
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import contentImage from 'images/content_logo.png';

SwiperCore.use([Navigation, Pagination]);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

const Home = () => {
  return (
    // <Grid container spacing={2} sx={{ flexGrow: 1 }}>
    //   <Grid item xs={12} md={6}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12}>
    //         <Paper>Blooming Your voice!</Paper>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Paper>Description</Paper>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <Paper>Google Store</Paper>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <Paper>App Store</Paper>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Paper>TRY DEMO HERE!</Paper>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Paper>
    //           <Link to="/chart">Chart</Link>
    //         </Paper>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <img src={contentImage} alt="content" style={{ width: 100 + '%' }} />
    //   </Grid>
    // </Grid>
    <Container>
      <div style={{ height: 100 }}>asdf</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        mousewheel
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Home;
