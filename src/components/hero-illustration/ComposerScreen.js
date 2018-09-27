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
  transform-origin: bottom center;
  box-shadow: 0px 62.5px 125px -25px hsla(208,24%,10%,.46),0px 37.5px 75px -37.5px hsla(208,24%,10%,.08);
  border-radius: 5px;
  border: 1px solid hsl(208, 18%, 85%);
  border-bottom-color: hsl(208, 18%, 75%);
  height: 100%;

  @media screen and (min-width: 1000px) {
    transform: perspective(70em) rotateX(26deg);
    margin-top: -190px;
  }
`;

const ComposerScreen = () => (
  <figure
  >
    <AspectRatio ratio_169>
      <Browser
      >
        <Flexbox
          h100
        >
          <ComposerLayerTree />
          {/*<ComposerPreview />*/}
          <ComposerProperties />
        </Flexbox>
      </Browser>
    </AspectRatio>
  </figure>
)

export default ComposerScreen
