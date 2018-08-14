import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const SupportedBy = () => (
  <Section
    size3
    style={{
      backgroundColor: 'hsl(208,30%,97%)'
    }}
  >
    <Container
      size4
    >
      <Box
        mb5
      >
        <Heading
          size2
          lh4
        >
          Modulz is supported by
        </Heading>
      </Box>
    </Container>
    <Container
      size2
    >
      <Flexbox
        jc_center
      >
        <Box
          mr4
        >
          <Text
            size3
            lh3
          >
            InVision
          </Text>
        </Box>
        <Box
          ml4
        >
          <Text
            size3
            lh3
          >
            Adobe
          </Text>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default SupportedBy
