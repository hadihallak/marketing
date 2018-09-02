import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const Container = styled.div`
  pointer-events: none;

  ${Heading},
  ${Text} {
    opacity: 0;
    transform: translateY(10px);
    transition: transform 750ms cubic-bezier(0,1,0,1), opacity 150ms linear;
  }

  ${props => props.active && css`
    pointer-events: auto;

    ${Heading},
    ${Text} {
      opacity: 1;
      transform: translateY(0);
    }
  `}

  ${props => props.absolute && css`
    position: absolute;
  `}
`;

const InfoSlide = (props) => (
  <Container {...props}>
    <Box
      mb5
    >
      <Heading
        size3
      >
        {props.heading}
      </Heading>
    </Box>
    <Text
      size3
      lh3
      gray600
    >
      {props.blurb}
    </Text>
  </Container>
);

export default InfoSlide;
