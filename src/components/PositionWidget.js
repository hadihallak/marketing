import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const FlexboxWidget = () => (
  <Section
    size3
  >
    <Container
      size2
    >
      <Box
        mb5
      >
        <Heading
          size4
          gray600
        >
          Dragging rectangles
        </Heading>
        <Heading
          size4
        >
          Pinning
        </Heading>
      </Box>
      <Text
        size3
        lh2
      >
        You can pin elements to fix them to the top or bottom of the device.
      </Text>
    </Container>
  </Section>
)

export default FlexboxWidget
