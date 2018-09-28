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
          lh5
          style={{fontSize: '27px', letterSpacing: '-.018em'}}
        >
          The visual code editor for designing and building digital user interfaces&mdash;without writing code.
        </Heading>
      </Box>
    </Container>
    <Container
      size4
    >
      <Box
        mt7
      >
        <Text
          size3
          lh4
          gray600
          style={{fontSize: '19px'}}
        >
          The visual code editor for designing and building digital user interfaces. Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
        </Text>
      </Box>
    </Container>
  </Section>
)

export default UseCases
