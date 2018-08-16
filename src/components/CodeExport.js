import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

import ComposerScreen from '../components/hero-illustration/ComposerScreen'

const CodeExport = () => (
  <Section
    size3
    gray900
  >
    <Container
      size2
    >
      <Box
        mb5
      >
        <Heading
          size4
          gray600
        >
          Handoff
        </Heading>
        <Heading
          size4
          white
        >
          React export
        </Heading>
      </Box>
      <Text
        size3
        lh2
        white
      >
        Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
      </Text>
      <ComposerScreen />
    </Container>
  </Section>
)

export default CodeExport
