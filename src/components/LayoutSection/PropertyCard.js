import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: -200px;
  width: 225px;
  opacity: 0;
  box-shadow: 0 35px 55px 10px hsla(208,30%,10%,.05);
  z-index: 9999;
  transform: translate(-40px, -40px);
  transition: transform 750ms cubic-bezier(0,1,0,1), opacity 150ms linear;
  flex-shrink: 0;
  pointer-events: none;
  ${props => props.active && css`
    transform: translate(0);
    opacity: 1;
  `}
  ${props => props.left && css`
    left: -240px
    right: auto;
  `}
`;

const PropertyCard = (props) => (
  <Container
    {...props}
    style={{
      top: `${props.top}px`
    }}
  >
    {props.children}
  </Container>
);

export default PropertyCard;
