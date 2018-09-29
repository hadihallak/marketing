import React from 'react'
import styled, { css, keyframes } from 'styled-components';

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';
import { Heading } from 'radix-ds';

const TopSlide = keyframes`
  100% {
    transform: translateY(-10px);
  }
`;

const BottomSlide = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StrikeAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const Strike = styled.div`
  position: absolute;
  transform: scaleX(0);
  transform-origin: left;
  width: 110%;
  height: 2px;
  top: 60%;
  left: -5%;
  background-color: currentColor;
  animation: ${StrikeAnimation} 100ms ease;
  animation-delay: 2000ms;
  animation-fill-mode: forwards;
`;

const TopWord = styled.div`
  display: inline-block;
  transform: translateY(40px);
  animation: ${TopSlide} 400ms cubic-bezier(.15,1,.15,1);
  animation-delay: 2500ms;
  animation-fill-mode: forwards;
`;

const BottomWord = styled.div`
  opacity: 0;
  transform: translateY(5px);
  animation: ${BottomSlide} 400ms cubic-bezier(.15,1,.15,1);
  animation-delay: 3000ms;
  animation-fill-mode: forwards;
`;

const Video = () => (
  <Section
    gray200
    size1
    height_100
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <Container
      size2
    >
        <Box>
          <TopWord>
            <Heading
              size4
              gray600
              style={{
                position: 'relative',
                // display: 'none'
              }}
            >
              Symbols
              <Strike/>
            </Heading>
          </TopWord>
          <BottomWord>
            <Heading
              size6
              style={{
                fontFamily: 'UntitledSans-Medium',
                fontSize: '72px',
                // display: 'none'
              }}
            >
              Components
            </Heading>
          </BottomWord>
        </Box>
    </Container>
  </Section>
)

export default Video
