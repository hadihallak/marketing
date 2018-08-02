import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const Devices = () => (
  <Section
    size3
  >
    <Container
      size4
    >
      <Box
        mb5
      >
        <Heading
          size4
          gray600
        >
          Artboards
        </Heading>
        <Heading
          size4
          gray600
        >
          Frames
        </Heading>
        <Heading
          size4
        >
          Devices
        </Heading>
      </Box>
      <Text
        size3
        lh2
      >
        Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
      </Text>
    </Container>
  </Section>
)

export default Devices
