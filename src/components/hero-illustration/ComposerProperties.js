import React from 'react';

import {
  Flexbox,
  Box,
  List,
  Heading,
  Text,
  Button,
  Select
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

function ComposerProperties() {
  return (
    <Box
      bl
      bcgray400
      fs0
      style={{
        width: '220px',
        overflow: 'hidden',
      }}
    >
      <PropertiesFlexbox />
      <PropertiesDimensions />
      <PropertiesMargin />
      <PropertiesPadding />
      <PropertiesFill />
      <PropertiesOpacity />
      <PropertiesText />
      <PropertiesShadow />
      <PropertiesPin />
      <PropertiesTransform />
      <PropertiesTransition />
      <PropertiesFilter />
    </Box>
  );
}

export default ComposerProperties;
