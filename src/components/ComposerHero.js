import React from 'react'

import {
  Section,
  Container,
  Flexbox,
  Box,
  Heading,
  Badge,
  Text,
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
          mb_4
          bold
          as="h1"
        >
          The next step in visual coding
        </Heading>
      </Container>
      <Container
        size3
      >
        <Heading
          size3
          lh_4
          color_gray600
          ta_center
          as="h2"
        >
          Like Sketch but with <Text color_gray500 inline as="s">vectors</Text> interactive components, <Text color_gray500 inline as="s">freeform</Text> box model layout and <Text color_gray500 inline as="s">handoff</Text> React export.
        </Heading>
        <Box mt_7 mb_8>
          <LinesButton
            as="a"
            href="https://www.kickstarter.com"
            target="_blank"
            mt_1
          >
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
