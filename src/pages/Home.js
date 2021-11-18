import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

// Core modules imports are same as usual
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import contentImage from 'images/content_logo.png';
import logoWhite from 'images/logo_white.png';
import cover from 'images/cover.svg';
import logo from 'images/logo.svg';

SwiperCore.use([Mousewheel, Pagination]);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background: white;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  gap: 20px;
  padding: 0 16px;
  width: 100%;
  @media only screen and (min-width: 800px) {
    justify-content: flex-start;
    font-size: 32px;
    text-align: left;
    margin: 0 auto;
    padding: 0 30px;
    gap: 30px;
  }
  @media only screen and (min-width: 1180px) {
    width: 1180px;
  }
`;

const LogoContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  @media only screen and (min-width: 800px) {
    width: 550px;
    margin: 0;
  }
`;

const ColorButton = styled(Button)`
  color: white !important;
  border: 2px solid white !important;
  width: 160px !important;
  font-size: 14px !important;
  margin: 0 auto !important;
  padding: 5px !important;
  @media only screen and (min-width: 800px) {
    font-size: 18px !important;
    width: 280px !important;
    margin: 0 !important;
    padding: 10px !important;
  } ;
`;

const Home = () => {
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
        style={{ position: 'fixed', left: 0, top: 0, width: '100vw' }}
      >
        <SwiperSlide style={{ background: '#8b63ff' }}>
          <MainContainer className="text-container">
            {/* <div style={{ fontSize: '2em', color: 'white' }}>Blooming Your Voice!</div> */}
            <LogoContainer>
              <img src={cover} alt="logo" style={{ display: 'block' }} />
            </LogoContainer>
            <ColorButton variant="outlined">Download</ColorButton>
          </MainContainer>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainer>
            <img src={logo} alt="logo" style={{ display: 'block' }} />
          </LogoContainer>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Home;
