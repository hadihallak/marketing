import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const WallOfLove = () => (
  <Section
    size3
  >
    <Container
      size3
    >
      <Heading
        size5
        mb8
      >
        What the community are saying
      </Heading>
    </Container>
    <Flexbox>
      <Link
        to="/page-2/"
      >
        <Box
          p3
          border
          bcgray300
        >
          <Text
            size3
          >
            Modulz is the greatest design tool. Woe to all ye other design tools. For ye are not worthy.
          </Text>
        </Box>
      </Link>
      <Link
        to="/page-2/"
      >
        <Box
          p3
          border
          bcgray300
        >
          <Text
            size3
          >
            Modulz is the greatest design tool. Woe to all ye other design tools. For ye are not worthy.
          </Text>
        </Box>
      </Link>
      <Link
        to="/page-2/"
      >
        <Box
          p3
          border
          bcgray300
        >
          <Text
            size3
          >
            Modulz is the greatest design tool. Woe to all ye other design tools. For ye are not worthy.
          </Text>
        </Box>
      </Link>
      <Link
        to="/page-2/"
      >
        <Box
          p3
          border
          bcgray300
        >
          <Text
            size3
          >
            Modulz is the greatest design tool. Woe to all ye other design tools. For ye are not worthy.
          </Text>
        </Box>
      </Link>
    </Flexbox>
  </Section>
)

export default WallOfLove
