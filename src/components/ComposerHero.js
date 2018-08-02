import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const ComposerHero = () => (
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
          size6
        >
          Composer hero heading
        </Heading>
        <Heading
          size3
          gray600
        >
          A small heading to support to big heading
        </Heading>
      </Box>
    </Container>
  </Section>
)

export default ComposerHero
