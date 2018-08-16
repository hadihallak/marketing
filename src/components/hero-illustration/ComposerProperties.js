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
import PropertiesAppearance from './PropertiesAppearance'

function ComposerProperties() {
  return (
    <Box
      bl
      bcgray300
      fs0
      style={{
        width: '220px',
        borderColor: 'hsl(208, 18%, 22%)',
        overflow: 'hidden',
      }}
    >
      <PropertiesFlexbox />
      <PropertiesAppearance />
      <PropertiesFlexbox />
      <PropertiesFlexbox />
      <PropertiesFlexbox />
    </Box>
  );
}

export default ComposerProperties;
