import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';
import styled from 'styled-components';

// Core modules imports are same as usual
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import contentImage from 'images/content_logo.png';
import logoWhite from 'images/logo_white.png';

SwiperCore.use([Mousewheel, Pagination]);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  gap: 10px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    font-size: 32px;
    margin-left: 60px;
    text-align: left;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  text-align: center;
  width: 300px;
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;

const Home = ({ isMobile }) => {
  return (
    <Container>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{ background: '#8b63ff' }}>
          <MainContainer className="text-container">
            <div style={{ fontSize: '2em', color: 'white' }}>Blooming Your Voice!</div>
            <LogoContainer>
              <img src={logoWhite} alt="logo" />
            </LogoContainer>
          </MainContainer>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Home;
