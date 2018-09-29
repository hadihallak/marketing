import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const UseCases = () => (
  <Section
    size3
    bp2_nmt_9
  >
    <Container
      size3
    >
      <Box
        bp2_nmt_9
      >
        <Heading
          size4
          lh_5
        >
          The visual code editor for designing and building digital products&mdash;without writing code.
        </Heading>
      </Box>
    </Container>
    <Container
      bp2_size4
    >
      <Box
        mt_7
      >
        <Text
          size4
          bp2_size5
          lh_3
          bp2_lh_4
          color_gray600
          mb_5
        >
          Almost all design tools are optimised for illustration. Vector-based tools are great for wireframing and exploration, but when it comes to designing interactive components, complex layouts and stateful user interfaces—we need something more powerful.
        </Text>
        <Text
          size4
          bp2_size5
          lh_3
          bp2_lh_4
          color_gray600
        >
          Modulz is specifically designed to produce robust, accessible, production-grade components and interfaces.
        </Text>
      </Box>
    </Container>
  </Section>
)

export default UseCases
