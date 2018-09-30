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
      bp1_ta_center
    >
      <Container
        size2
      >
        <Heading
          size5
          bp1_size6
          lh_5
          bp1_lh_8
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
          size2
          bp1_size3
          lh_3
          bp1_lh_4
          color_gray600
          as="h2"
        >
          Like Sketch but with <Text color_gray500 inline as="s">vectors</Text> interactive components, <Text color_gray500 inline as="s">freeform</Text> box model layout and <Text color_gray500 inline as="s">handoff</Text> React export.
        </Heading>
        <Box mt_7 mb_8>
          <LinesButton
            mt_1
            as="a"
            href="https://www.kickstarter.com"
            target="_blank"
            rel="noopener noreferrer"
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
