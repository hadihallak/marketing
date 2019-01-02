import React from 'react'
import styled from 'styled-components';

import {
  Flexbox,
  Box,
  AspectRatio,
  Text,
  GhostButton,
  Avatar,
  PillTab,
  Button,
  List,
  Theme
} from 'radix-ds';

import ComposerToolbelt from './ComposerToolbelt'
import ComposerLayerTree from './ComposerLayerTree'
import ComposerPreview from './ComposerPreview'
import ComposerProperties from './ComposerProperties'
import States from './States'

import PropHeader from './PropHeader'
import PropNode from './PropNode'

const Figure = styled.figure`
  width: 900px;
  pointer-events: none;

  @media screen and (min-width: ${Theme.BREAKPOINT_200}) {
    width: auto;
  }
`;

const Browser = styled.div`
  background-color: white;
  box-shadow: 0px 60px 123px -25px hsla(208,29%,12%,.42),0px 35px 75px -35px hsla(208,24%,10%,.08);
  border-radius: ${Theme.BORDERRADIUS_200};
  border: 1px solid ${Theme.GRAY_400};
  border-bottom-color: ${Theme.GRAY_500};
  height: 100%;
  transform: scale(.75);
  transform-origin: top left;

  @media screen and (min-width: ${Theme.BREAKPOINT_100}) {
    transform: scale(1);
  }

  @media screen and (min-width: ${Theme.BREAKPOINT_200}) {
    transform: perspective(70em) rotateX(26deg) rotateY(0) rotateZ(0) translateX(0);
    margin-top: -190px;
    transform-origin: bottom center;
  }
`;

const ComposerScreen = () => (
  <Figure
     aria-hidden="true"
  >
    <AspectRatio ratio_169>
      <Browser>
        
      </Browser>
    </AspectRatio>
  </Figure>
)

export default ComposerScreen
