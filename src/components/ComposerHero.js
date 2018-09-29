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
    size2
    style={{
      paddingBottom: '0',
    }}
  >
    <Box
      ta_center
    >
      <Container
        size2
      >
        <Heading
          size6
          ta_center
          mb_5
          bold
        >
          The next step in visual coding
        </Heading>
      </Container>
      <Container
        size3
      >
        <Heading
          size3
          lh_3
          gray600
          ta_center
          mb_6
        >
          Like Sketch but with <s>vectors</s> interactive components, <s>freeform</s> box model layout and <s>handoff</s> React export.
        </Heading>
        <Badge
          size2
          gray
        >
          Coming Spring 2019
        </Badge>
        <Box mt_8 mb_8>
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
