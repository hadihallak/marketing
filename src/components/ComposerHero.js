import React from 'react'

import {
  Section,
  Container,
  Flexbox,
  Box,
  Heading,
  Badge,
  LinesButton
} from 'radix-ds';

import ComposerScreen from '../components/hero-illustration/ComposerScreen'

const ComposerHero = () => (
  <Section
    size3
    style={{
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
          bold
          style={{letterSpacing: '-.052em'}}
        >
          The next step in visual coding
        </Heading>
      </Container>
      <Container
        size3
      >
        <Heading
          size3
          lh3
          gray600
          center
          mb6
        >
          Like Sketch but with <s>vectors</s> interactive components, <s>freeform</s> box model layout and <s>handoff</s> React export.
        </Heading>
        <Badge
          gray
          style={{
            height: '25px',
            fontSize: '11px',
          }}
        >
          Coming Spring 2019
        </Badge>
        <Box mt6 mb6>
          <LinesButton>
            Support us on Kickstarter
          </LinesButton>
        </Box>
      </Container>
    </Box>
    <Container>
      <ComposerScreen />
    </Container>
  </Section>
)

export default ComposerHero
