import React from 'react'
import styled from 'styled-components';

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { AspectRatio } from 'radix-ds';
import { Text } from 'radix-ds';

import ComposerToolbelt from './ComposerToolbelt'
import ComposerLayerTree from './ComposerLayerTree'
import ComposerPreview from './ComposerPreview'
import ComposerProperties from './ComposerProperties'

const Browser = styled.div`
  background-color: hsl(208, 18%, 14%);
  transform-origin: bottom center;
  box-shadow: 0px 62.5px 125px -25px hsla(0,0%,0%,.5),0px 37.5px 75px -37.5px rgba(0,0,0,.6);
  border-radius: 5px;
  border: 1px solid black;
  border-bottom-color: hsl(208, 18%, 25%);
  height: 100%;

  @media screen and (min-width: 1000px) {
    transform: perspective(70em) rotateX(26deg);
    margin-top: -190px;
  }
`;

const ComposerScreen = () => (
  <figure
  >
    <AspectRatio>
      <Browser
      >
        <Flexbox
          h100
        >
          <ComposerToolbelt />
          <ComposerLayerTree />
          <ComposerPreview />
          <ComposerProperties />
        </Flexbox>
      </Browser>
    </AspectRatio>
  </figure>
)

export default ComposerScreen
