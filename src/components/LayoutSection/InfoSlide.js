import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const Container = styled.div`
  opacity: 0;
  ${props => props.active && css`
    opacity: 1;
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
