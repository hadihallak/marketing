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
  >
    <Container
      size3
      style={{marginTop: '-130px'}}
    >
      <Box
      >
        <Heading
          size4
          lh_5
        >
          The visual code editor for designing and building digital user interfaces&mdash;without writing code.
        </Heading>
      </Box>
    </Container>
    <Container
      size4
    >
      <Box
        mt_7
      >
        <Text
          size5
          lh_4
          color_gray600
        >
          The visual code editor for designing and building digital user interfaces. Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
        </Text>
      </Box>
    </Container>
  </Section>
)

export default UseCases
