import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const UseCases = () => (
  <div>
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
            Modulz is a code-based design tool optimised for designing and building digital user interfaces&mdash;without writing code.
          </Heading>
        </Box>
      </Container>
      <Container
        size2
      >
        <Flexbox>
          <Box
            mt6
            mr4
          >
            <Text
              size3
              lh3
            >
              Modulz is a code-based design tool optimised for designing and building digital user interfaces.
            </Text>
          </Box>
          <Box
            mt6
            ml4
          >
            <Text
              size3
              lh3
            >
              Modulz is a code-based digital design tool. With useful features, an intuitive interface and powerful plugins.
            </Text>
          </Box>
        </Flexbox>
      </Container>
    </Section>

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
  </div>
)

export default UseCases
