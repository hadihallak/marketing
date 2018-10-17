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
        <Box mt_7 mb_7>
          <Badge gray size2>
            Coming this Winter
          </Badge>
        </Box>
        <Box mt_7 mb_7>
          <LinesButton
            mt_1
            as="a"
            href="https://www.kickstarter.com/projects/stephenhaney/modulzthe-next-step-in-visual-coding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support us on Kickstarter
            <Box ml_3>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor">
                <path d="M9.5 2.5H12.5V5.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 8.5L12.5 2.5" strokeLinecap="round"/>
                <path d="M10.5 9.07143V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H5.92857" strokeLinecap="round"/>
              </svg>
            </Box>
          </LinesButton>
        </Box>
      </Container>
    </Box>
    <Container size1>
      <ComposerScreen />
    </Container>
  </Section>
)

export default ComposerHero
