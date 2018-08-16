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
    style={{
      backgroundColor: 'hsl(208,30%,7%)',
    }}
  >
    <Container
      size3
    >
      <Box
      >
        <Heading
          size3
          lh5
          white
        >
          A visual code editor for designing and building digital user interfaces&mdash;without writing code.
        </Heading>
      </Box>
    </Container>
  </Section>
)

export default UseCases
