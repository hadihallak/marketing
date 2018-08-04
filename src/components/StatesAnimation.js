import React from "react";
import styled, { keyframes } from 'styled-components';
import { Theme } from 'radix-ds';

const states = keyframes`
  0% {
    opacity: 1;
  }
  24.99% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  99.99% {
    opacity: 0;
  }
`;

const StatesAnimation = styled.input`
  animation: ${states} 10s linear infinite;
`;

export default StatesAnimation;
