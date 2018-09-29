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
        mb_7
        ta_center
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
          mr_7
        >
          <Text
            size8
          >
            InVision
          </Text>
        </Box>
        <Box
          ml_7
        >
          <Text
            size8
          >
            Adobe
          </Text>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default SupportedBy
