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
    style={{
      backgroundColor: 'hsl(208,30%,7%)',
      paddingBottom: '0',
    }}
  >
    <Box
      center
    >
      <Container
        size2
      >
        <Heading
          size6
          center
          mb5
          white
        >
          The next step in visual coding
        </Heading>
      </Container>
      <Container
        size3
      >
        <Heading
          size2
          lh3
          gray600
          center
          mb6
        >
          Like Sketch but with <s>vectors</s> interactive elements, <s>freeform</s> DOM layout and <s>handoff</s> React export.
        </Heading>
        <Badge
          blue
          style={{
            height: '25px',
            fontSize: '11px',
          }}
        >
          Coming Winter 2018
        </Badge>
      </Container>
    </Box>
    <Container>
      <ComposerScreen />
    </Container>
  </Section>
)

export default ComposerHero
