import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Badge } from 'radix-ds';

import ComposerScreen from '../components/ComposerScreen'

const ComposerHero = () => (
  <Section
    size3
  >
    <Container
      size2
    >
      <Heading
        size6
        center
        mb2
      >
        The next step in visual coding
      </Heading>
    </Container>
    <Container
      size3
    >
      <Heading
        size3
        lh4
        gray600
        center
        mb7
      >
        Like Sketch but with <s>vectors</s> interactive elements, <s>freeform</s> DOM layout and <s>handoff</s> React export.
      </Heading>
      <Badge
        size2
        blue
        style={{
          height: '25px',
          fontSize: '11px',
          fontFamily: '"UntitledSans"',
        }}
      >
        Coming Winter 2018
      </Badge>
    </Container>
    <Container>
      <ComposerScreen />
    </Container>
  </Section>
)

export default ComposerHero
