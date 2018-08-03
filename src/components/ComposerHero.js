import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';

import ComposerScreen from '../components/ComposerScreen'

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
          white
          mb2
        >
          The next step in visual coding
        </Heading>
        <Heading
          size2
          lh3
          gray600
        >
          It's a bit like Sketch but with <s>vectors</s> web elements, <s>freeform</s> DOM layout and <s>handoff</s> production-grade React export.
        </Heading>
      </Box>
    </Container>
    <Container>
      <ComposerScreen />
    </Container>
  </Section>
)

export default ComposerHero
