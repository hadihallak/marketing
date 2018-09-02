import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { ToggleButton } from 'radix-ds';
import { Select } from 'radix-ds';
import { Switch } from 'radix-ds';
import { Input } from 'radix-ds';

const PropertyCardScroll = () => (
  <Box
    gray100
    p2
  >
    <Heading
      size1
      mb2
    >
      Scroll
    </Heading>
    <Flexbox
      ai_center
    >
      <Box
        pr2
      >
        <Text
          size1
          gray600
        >
          X-axis
        </Text>
      </Box>
      <Box
        fg1
      >
        <Flexbox>
          <ToggleButton
            size1
            left
          />
          <ToggleButton
            size1
            left
          />
        </Flexbox>
      </Box>
    </Flexbox>
    <Flexbox
      ai_center
    >
      <Box
        pr2
      >
        <Text
          size1
          gray600
        >
          Y-axis
        </Text>
      </Box>
      <Box
        fg1
      >
        <Flexbox>
          <ToggleButton
            size1
            left
          />
          <ToggleButton
            size1
            left
          />
        </Flexbox>
      </Box>
    </Flexbox>
    <Flexbox
      ai_center
    >
      <Box
        pr2
      >
        <Text
          size1
          gray600
        >
          Visibility
        </Text>
      </Box>
      <Box
        fg1
      >
        <Flexbox>
          <ToggleButton
            size1
            left
          />
          <ToggleButton
            size1
            left
          />
        </Flexbox>
      </Box>
    </Flexbox>
  </Box>
)

export default PropertyCardScroll
