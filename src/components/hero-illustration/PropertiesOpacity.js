import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  Input,
  Slider,
  Select
} from 'radix-ds';

function PropertiesOpacity() {
  return (
    <Box
      p2
      bt
      bcgray300
    >
      <Heading
        size1
        gray600
        mb2
      >
        Opacity
      </Heading>
      <Flexbox mt2 ai_center>
      <Box fg1 fs0 pr4>
        <Select>
          <option>Normal</option>
          <option>Multiply</option>
          <option>Screen</option>
          <option>Overlay</option>
          <option>Darken</option>
          <option>Lighten</option>
          <option>Color dodge</option>
          <option>Color burn</option>
          <option>Hard light</option>
          <option>Soft light</option>
          <option>Difference</option>
          <option>Exclusion</option>
          <option>Hue</option>
          <option>Saturation</option>
          <option>Color</option>
          <option>Luminosity</option>
        </Select>
      </Box>
      <Box fg1 pr4>
        <Slider value="100" />
      </Box>
      <Box>
        <Input tnum value="100" style={{width: '3ch'}} />
      </Box>
    </Flexbox>
    </Box>
  );
}

export default PropertiesOpacity;
