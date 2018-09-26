import React from 'react'

import {
  Section,
  Container,
  Flexbox,
  Box,
  Heading,
  Text,
  Title,
} from 'radix-ds';

const SupportedBy = () => (
  <Section
    size3
  >
    <Container
      size4
    >
      <Box
        mb7
        center
      >
        <Title
          size2
          gray600
        >
          Supported by
        </Title>
      </Box>
      <Flexbox
        jc_center
      >
        <Box
          mr7
        >
          <Text
            size5
          >
            InVision
          </Text>
        </Box>
        <Box
          ml7
        >
          <Text
            size5
          >
            Adobe
          </Text>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default SupportedBy
