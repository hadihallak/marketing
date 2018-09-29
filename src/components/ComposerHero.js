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
          lh_4
          gray600
          ta_center
        >
          Like Sketch but with <Text color_gray500 as="s" style={{display: 'inline'}}>vectors</Text> interactive components, <Text color_gray500 as="s" style={{display: 'inline'}}>freeform</Text> box model layout and <Text color_gray500 as="s" style={{display: 'inline'}}>vectors</Text> React export.
        </Heading>
        <Box mt_7 mb_8>
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
