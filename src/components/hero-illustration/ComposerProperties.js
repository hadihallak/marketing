import React from 'react';
import styled, { keyframes } from 'styled-components';

import {
  Box,
  Theme
} from 'radix-ds';

import PropertiesFlexbox from './PropertiesFlexbox'
import PropertiesMargin from './PropertiesMargin'
import PropertiesPadding from './PropertiesPadding'
import PropertiesShadow from './PropertiesShadow'
import PropertiesDimensions from './PropertiesDimensions'
import PropertiesFill from './PropertiesFill'
import PropertiesOpacity from './PropertiesOpacity'
import PropertiesText from './PropertiesText'
import PropertiesPin from './PropertiesPin'
import PropertiesTransform from './PropertiesTransform'
import PropertiesTransition from './PropertiesTransition'
import PropertiesFilter from './PropertiesFilter'

const PropertiesAnimation = keyframes`
  100% {
    transform: translateY(-700px);
  }
`

const AnimatedProperties = styled.div`
  @media screen and (min-width: ${Theme.BREAKPOINT_200}) {
    animation: ${PropertiesAnimation} 8000ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    animation-direction: alternate-reverse;
  }
`;

function ComposerProperties() {
  return (
    <Box
      overflow_hidden
    >
      <AnimatedProperties>
        {/*<PropertiesFlexbox />*/}
        <PropertiesDimensions />
        {/*<PropertiesMargin />*/}
        <PropertiesPadding />
        <PropertiesFill />
        <PropertiesOpacity />
        <PropertiesText />
        <PropertiesShadow />
        <PropertiesPin />
        <PropertiesTransform />
        <PropertiesTransition />
        {/*<PropertiesFilter />*/}
      </AnimatedProperties>
    </Box>
  );
}

export default ComposerProperties;
