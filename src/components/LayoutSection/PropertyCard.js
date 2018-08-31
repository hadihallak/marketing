import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: -20px;
  right: -100px;
  width: 220px;
  // opacity: 0;
  background-color: pink;
  z-index: 9999;
  transform: translate(-40px, -40px);
  transition: transform 750ms cubic-bezier(0,1,0,1), opacity 150ms linear;
  flex-shrink: 0;
  ${props => props.active && css`
    transform: translate(0);
    opacity: 1;
  `}
`;

const PropertyCard = (props) => (
  <Container {...props}>
    {props.children}
  </Container>
);

export default PropertyCard;
