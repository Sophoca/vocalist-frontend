import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import styled from 'styled-components';

// Core modules imports are same as usual
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import StyledLink from 'components/StyledLink';
import contentImage from 'images/microphone-2.png';
import contentImage1 from 'images/handshake.png';
import contentImage2 from 'images/tambourine.png';
import contentImage3 from 'images/mirror-ball.png';
import mockupLogo from 'images/mockup_logo2.png';
import mockup from 'images/mockup.png';
import logoWhite from 'images/logo_white.png';
import cover from 'images/cover.svg';
import logo from 'images/logo.svg';
import DownloadButton from 'components/Home/DownloadButton';

SwiperCore.use([Mousewheel, Pagination]);

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

const Container = styled.div`
  width: 100%;
  @media only screen and (min-width: 1180px) {
    width: 1180px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  gap: 20px;
  padding: 0 16px;
  width: 100%;
  @media only screen and (min-width: 800px) {
    justify-content: flex-start;
    font-size: 30px;
    text-align: left;
    margin: 0 auto;
    padding: 0 30px;
    gap: 30px;
  }
`;
const MainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  gap: 20px;
  padding: 0 16px;
  width: 100%;
  @media only screen and (min-width: 800px) {
    font-size: 30px;
    text-align: left;
    margin: 0 auto;
    padding: 0 30px;
    gap: 30px;
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

const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  text-align: center;
  justify-content: space-around;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const CaseItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  @media only screen and (min-width: 800px) {
    width: 240px;
    flex-direction: column;
  }
`;

const PurpleButton = styled(Button)`
  color: white !important;
  background-color: #8b63ff !important;
  border: 0 !important;
  width: 160px !important;
  font-size: 14px !important;
  margin: 0 auto !important;
  padding: 5px !important;
  @media only screen and (min-width: 800px) {
    font-size: 18px !important;
    width: 220px !important;
    margin: 0 !important;
    padding: 10px !important;
  }
  &:hover {
    background-color: #7655d9 !important;
  }
`;

const Title = styled.div`
  font-size: 1.4em;
  font-weight: bold;
`;
const Content = styled.div`
  font-size: 0.9em;
  line-height: 150%;
`;
const Content2 = styled.div`
  font-size: 0.7em;
  width: 200px;
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 100px;
  margin: 0 auto;

  @media only screen and (min-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 30px;
  }
`;

const Home = ({ isMobile }) => {
  return (
    <Background>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100vw',
          paddingTop: isMobile ? '48px' : '65px'
        }}
      >
        <SwiperSlide className="my-swiper-slide">
          <Container>
            <MainContainer className="text-container">
              <LogoContainer>
                <img src={cover} alt="logo" />
              </LogoContainer>
              <DownloadButton />
            </MainContainer>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container style={{ paddingBottom: '30px' }}>
            <MainContainer style={{ justifyContent: 'center', textAlign: 'center' }}>
              <CaseItem>
                <ImageContainer>
                  <img src={contentImage} alt="" />
                </ImageContainer>
              </CaseItem>
              <Title>????????? ????????? ???????????? ?????????</Title>
              <div className="flex column gap10">
                <Content>?????? ?????? ?????? ?????? ?????? ??? ?????? ??? ????????????,</Content>
                <Content>
                  ?????? ???????????? <b>??? ???????????? ?????? ?????? ????????? ???????????? ???</b> ????????????????
                </Content>
              </div>
            </MainContainer>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <MainContainer style={{ justifyContent: 'center', textAlign: 'center' }}>
              <Title>?????? ?????? ?????????, ?????? ????????? ????????? ???????</Title>
              <div className="flex column gap10">
                <Content>?????? ???????????? ???????????? ??? ???, ?????? ????????? ????????? ?????? ?????????</Content>
                <Content>?????? ?????? ???????????? ??????????????? ???????????? ?????? ????????????????</Content>
              </div>
              <CaseContainer>
                <CaseItem>
                  <ImageContainer>
                    <img src={contentImage1} alt="" />
                  </ImageContainer>
                  <div className="flex column">
                    <Content2>?????? ?????? ????????????</Content2>
                    <Content2>???????????? ????????? ???</Content2>
                  </div>
                </CaseItem>
                <CaseItem>
                  <ImageContainer>
                    <img src={contentImage2} alt="" />
                  </ImageContainer>
                  <div className="flex column">
                    <Content2>?????? ????????? ??? ?????????</Content2>
                    <Content2>???????????? ????????? ???</Content2>
                  </div>
                </CaseItem>
                <CaseItem>
                  <ImageContainer>
                    <img src={contentImage3} alt="" />
                  </ImageContainer>
                  <div className="flex column">
                    <Content2>???????????????</Content2>
                    <Content2>????????? ?????? ?????? ???</Content2>
                  </div>
                </CaseItem>
              </CaseContainer>
            </MainContainer>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="flex demo-container">
            <MainContainer2
              sytle={{
                flexGrow: 1,
                paddingTop: '20px',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Title style={{ fontSize: '1.8em', color: '#8b63ff' }}>????????? ???????????????!</Title>
              <div className="flex column gap10">
                <Content>??? ???????????? ??? ?????? ??????,</Content>
                <Content>?????? ????????? ?????? ??????,</Content>
                <Content>?????? ????????? ????????????????????????.</Content>
              </div>
              <div style={{ height: '20px' }} />
              <div className="flex column gap10">
                <Content>???????????? ????????? ???????????? ??? ???????????????.</Content>
                <Content>Blooming Your Voice!</Content>
              </div>
              <StyledLink to="/demo">
                <PurpleButton variant="outlined">????????????</PurpleButton>
              </StyledLink>
            </MainContainer2>
            <ImageContainer className="mockup-image" style={{ flexGrow: 1 }}>
              <img src={mockup} alt="" style={{ objectFit: 'contain' }} />
            </ImageContainer>
          </Container>
        </SwiperSlide>
      </Swiper>
    </Background>
  );
};

export default Home;
